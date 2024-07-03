import pkg from './main.js';
// import { fetch } from '@tauri-apps/api/http'
const { translate } = pkg;


const utils = {
  http: {
    fetch: async (url, options) => {
      // 这里可以使用 Node.js 的 fetch API 或兼容的库，比如 node-fetch
      // 注意：你需要安装node-fetch或其他兼容库
      const response = await fetch(url, options);
      return {
        ok: response.ok,
        status: response.status,
        headers: response.headers,
        json: () => response.json()
      };
    }
  }
};

// 测试翻译函数
async function testTranslate() {
  const text = "You can integrate this function into your translation function to make HTTP requests using this randomly selected user agent";
  const from = "en";
  const to = "zhs";
  const options = { utils };

  try {
    const result = await translate(text, from, to, options);
    console.log("翻译结果:", result);
  } catch (error) {
    console.error("翻译出错:", error);
  }
}

testTranslate();