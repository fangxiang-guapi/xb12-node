import { Request, Response, NextFunction } from 'express'; 
import * as userService from './user.service'; 
import bcrypt from 'bcrypt';



/** 
 * 验证用户数据 
 */ 
export const validateUserData = async ( 
    request: Request, 
    response: Response, 
    next: NextFunction, 
  ) => { 
    console.log('👮  验证用户数据'); 
       
    // 准备数据 
    const { name, password } = request.body; 
   // 验证用户名 
    const user = await userService.getUserByName(name); 
    if (user) return next(Error('USER_ALREADY_EXIST')); 
    // 验证必填数据 
    if (!name) return next(new Error('NAME_IS_REQUIRED')); 
    if (!password) return next(new Error('PASSWORD_IS_REQUIRED')); 
     
    // 下一步 
    next(); 
  }; 

  /** 
* Hash 密码 
*/ 
export const hashPassword = async ( 
    request: Request, 
    response: Response, 

    next: NextFunction, 
    ) => { 
    // 准备数据 
    const { password } = request.body; 
    // Hash 密码 
    request.body.password = await bcrypt.hash(password, 10); 
    // 下一步 
    next(); 
    }; 