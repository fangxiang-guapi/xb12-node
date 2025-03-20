import app from './app';
import { APP_PORT } from './app/app.config';
import { connection } from './app/database/mysql';

// 🟢 启动服务器（放在最后）
app.listen(APP_PORT, () => {
  console.log(`🚀 服务器已启动，监听端口 ${APP_PORT}`);
});
/** 
* 测试使用数据服务连接 
*/ 
connection.connect(error => { 
  if (error) { 
  console.log(' �连接数据服务失败：', error.message); 
  return; 
  }
  console.log('�成功连接数据服务 ~~'); 
});