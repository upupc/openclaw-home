#!/usr/bin/env node

/**
 * 测试钉钉 MCP 服务器连接（方案 2）
 * 直接使用 fetch 测试 SSE 端点
 */

const MCP_CONFIG = {
  url: 'https://mcp-gw.dingtalk.com/server/b3b071e0437a627e3af01c747c5baffd21dfc4517730bdd566e61d960152e688',
  key: '9030afc659aa58a5394937d3d417832c'
};

async function testConnection() {
  console.log('🔌 测试钉钉 MCP 服务器连接...\n');
  
  // 测试不同的 URL 格式
  const urls = [
    `${MCP_CONFIG.url}?key=${MCP_CONFIG.key}`,
    `${MCP_CONFIG.url}`,
    `https://mcp-gw.dingtalk.com/server/b3b071e0437a627e3af01c747c5baffd21dfc4517730bdd566e61d960152e688/sse?key=${MCP_CONFIG.key}`,
  ];
  
  for (const url of urls) {
    console.log(`尝试 URL: ${url}`);
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'text/event-stream',
          'Authorization': `Bearer ${MCP_CONFIG.key}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log(`状态码: ${response.status} ${response.statusText}`);
      console.log(`Content-Type: ${response.headers.get('content-type')}`);
      
      if (response.ok) {
        const text = await response.text();
        console.log('\n响应内容:');
        console.log(text.slice(0, 1000));
        console.log('\n✅ 连接成功！');
        return;
      } else {
        const text = await response.text();
        console.log(`错误响应: ${text.slice(0, 500)}\n`);
      }
    } catch (error) {
      console.log(`❌ 错误: ${error.message}\n`);
    }
  }
  
  // 尝试 POST 请求
  console.log('\n尝试 POST 请求...');
  try {
    const response = await fetch(MCP_CONFIG.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MCP_CONFIG.key}`
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'initialize',
        params: {
          protocolVersion: '2024-11-05',
          capabilities: {},
          clientInfo: {
            name: 'openclaw-test',
            version: '1.0.0'
          }
        }
      })
    });
    
    console.log(`状态码: ${response.status}`);
    const text = await response.text();
    console.log(`响应: ${text.slice(0, 1000)}`);
    
    if (response.ok) {
      console.log('\n✅ POST 请求成功！');
    }
  } catch (error) {
    console.log(`❌ POST 错误: ${error.message}`);
  }
}

testConnection();