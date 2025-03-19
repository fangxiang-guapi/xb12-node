import app from './app';
import { APP_PORT } from './app/app.config';

// 🟢 启动服务器（放在最后）
app.listen(APP_PORT, () => {
  console.log(`🚀 服务器已启动，监听端口 ${APP_PORT}`);
});
