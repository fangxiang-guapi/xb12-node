import jwt from 'jsonwebtoken'; 
import fs from 'fs';
import path from 'path';



// 读取私钥
const privateKeyPath = path.resolve(__dirname, '../../keys/private.key');  // 确保路径是相对于 src 目录的
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

/** 
* 签发令牌 
*/ 
interface SignTokenOptions { 
    payload?: any; 
    } 
    export const signToken = (options: SignTokenOptions) => { 
    // 准备选项 
    const { payload } = options; 
    // 签发 JWT 
    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' }); 
    // 提供 JWT 
    225 
    return token; 
    };