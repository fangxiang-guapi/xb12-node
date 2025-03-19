import express from 'express'; 
import { Request, Response } from 'express'; 
const app = express();
const port = 3000;

// 🟢 使用 JSON 解析中间件
app.use(express.json());

// 🟢 数据部分（修正数据的语法错误）
const data = [
  { id: 1, title: "关山月", content: "明月出天山，苍茫云海间" },
  { id: 2, title: "望岳", content: "会当凌绝顶，一览众山小" },
  { id: 3, title: "忆江南", content: "日出江花红胜火，春来江水绿如蓝" },
];

// 🟢 首页
app.get("/", (request, response) => {
  response.send("你好 ~");
});

// 🟢 获取所有帖子
app.get("/posts", (request, response) => {
  response.send(data);
});
//获取指定内容
app.get("/posts/:postId", (request, response) => {
  console.log(request.params);
  // 获取内容 ID
  const { postId } = request.params;
  // 查找具体内容 
const posts = data.filter(item => item.id == parseInt(postId, 10)); 
  // 作出响应
  response.send(posts[0]);
});

/**
 * 创建内容
 */
app.post("/posts", (request, response) => {
  // 设置响应头部数据
  response.set("Sing-Along", "How I wonder what you are!");
  // 获取请求里的数据
  const { content } = request.body;
  // 作出响应
  response.send({
    message: `成功创建了内容：${content}`,
  });
  // 设置响应状态码
  response.status(201);
  // 输出请求头部数据
  console.log(request.headers["sing-along"]);
});

// 🟢 启动服务器（放在最后）
app.listen(port, () => {
  console.log(`🚀 服务器已启动，监听端口 ${port}`);
});
