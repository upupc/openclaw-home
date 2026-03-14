#!/usr/bin/env node

const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const URL = 'https://mcp-gw.dingtalk.com/server/b3b071e0437a627e3af01c747c5baffd21dfc4517730bdd566e61d960152e688?key=9030afc659aa58a5394937d3d417832c';

async function main() {
  console.log('🔌 连接钉钉 MCP 服务器...\n');
  
  try {
    const transport = new SSEClientTransport(new URL(URL));
    const client = new Client({ name: 'openclaw-test', version: '1.0.0' }, {
      capabilities: { tools: {}, resources: {}, prompts: {} }
    });
    
    await client.connect(transport);
    console.log('✅ 连接成功！\n');
    
    // 获取工具列表
    const { tools } = await client.listTools();
    console.log(`🛠️ 发现 ${tools.length} 个工具:\n`);
    tools.forEach((t, i) => {
      console.log(`${i+1}. **${t.name}**`);
      console.log(`   ${t.description || '无描述'}\n`);
    });
    
    await client.close();
  } catch (err) {
    console.error('❌ 错误:', err.message);
    process.exit(1);
  }
}

main();