import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

// 读取私钥
const privateKeyPath = path.resolve(__dirname, '../keys/private.key');  // 确保路径是相对于 src 目录的
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// 签发 JWT
export const signToken = (payload: object) => {
  const token = jwt.sign(payload, privateKey, {
    algorithm: 'RS256',  // 使用 RSA256 签名算法
    expiresIn: '1h',     // 设置过期时间为 1 小时
  });
  return token;
};

// 测试签发函数
const testPayload = { id: 1, name: 'Test User' };
const token = signToken(testPayload);

