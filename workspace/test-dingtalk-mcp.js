#!/usr/bin/env node

/**
 * 测试钉钉 MCP 服务器连接
 * 使用 @modelcontextprotocol/sdk 连接钉钉 MCP 服务器
 */

const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_CONFIG = {
  url: 'https://mcp-gw.dingtalk.com/server/b3b071e0437a627e3af01c747c5baffd21dfc4517730bdd566e61d960152e688',
  key: '9030afc659aa58a5394937d3d417832c'
};

async function testConnection() {
  console.log('🔌 正在连接钉钉 MCP 服务器...');
  console.log(`URL: ${MCP_CONFIG.url}`);
  
  try {
    // 创建 SSE 传输
    const transport = new SSEClientTransport(
      new URL(MCP_CONFIG.url),
      {
        eventSourceInit: {
          fetch: (url, init) => fetch(url, {
            ...init,
            headers: {
              ...init?.headers,
              'Authorization': `Bearer ${MCP_CONFIG.key}`
            }
          })
        },
        requestInit: {
          headers: {
            'Authorization': `Bearer ${MCP_CONFIG.key}`,
            'Content-Type': 'application/json'
          }
        }
      }
    );
    
    // 创建客户端
    const client = new Client({
      name: 'openclaw-dingtalk-mcp-test',
      version: '1.0.0'
    });
    
    // 连接服务器
    await client.connect(transport);
    console.log('✅ 连接成功！');
    
    // 获取服务器信息
    const serverInfo = await client.getServerVersion();
    console.log('\n📋 服务器信息:');
    console.log(JSON.stringify(serverInfo, null, 2));
    
    // 列出可用工具
    const tools = await client.listTools();
    console.log('\n🛠️ 可用工具:');
    if (tools.tools && tools.tools.length > 0) {
      tools.tools.forEach((tool, index) => {
        console.log(`\n${index + 1}. ${tool.name}`);
        console.log(`   描述：${tool.description || '无'}`);
        if (tool.inputSchema) {
          console.log(`   参数：${JSON.stringify(tool.inputSchema).slice(0, 200)}...`);
        }
      });
    } else {
      console.log('   暂无工具');
    }
    
    // 列出可用资源
    try {
      const resources = await client.listResources();
      console.log('\n📁 可用资源:');
      if (resources.resources && resources.resources.length > 0) {
        resources.resources.forEach((res, index) => {
          console.log(`\n${index + 1}. ${res.name} (${res.uri})`);
          console.log(`   描述：${res.description || '无'}`);
        });
      } else {
        console.log('   暂无资源');
      }
    } catch (e) {
      console.log('\n⚠️ 无法获取资源列表:', e.message);
    }
    
    // 列出可用提示词
    try {
      const prompts = await client.listPrompts();
      console.log('\n💬 可用提示词:');
      if (prompts.prompts && prompts.prompts.length > 0) {
        prompts.prompts.forEach((prompt, index) => {
          console.log(`\n${index + 1}. ${prompt.name}`);
          console.log(`   描述：${prompt.description || '无'}`);
        });
      } else {
        console.log('   暂无提示词');
      }
    } catch (e) {
      console.log('\n⚠️ 无法获取提示词列表:', e.message);
    }
    
    // 关闭连接
    await client.close();
    console.log('\n✅ 测试完成！');
    
  } catch (error) {
    console.error('❌ 连接失败:', error.message);
    if (error.stack) {
      console.error('\n详细错误:');
      console.error(error.stack);
    }
    process.exit(1);
  }
}

testConnection();
