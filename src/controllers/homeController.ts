// Controller 是負責處理 API 邏輯的地方

import { Request, Response } from 'express'; // 載入 Express 的型別

import AppDataSource from '../config/db'; // 載入 TypeORM 的資料來源
import { User } from '../entities/User'; // 載入 User 實體

// 這是一個簡單的 controller，處理首頁的邏輯

// 函式陳述式寫法
// Request 和 Response 是 Express 提供的型別，TypeScript 會用它來檢查我們的程式碼。
export async function getHome(req: Request, res: Response) {
    // 拿到 User 的 repository（用來操作 user 表）
    const userRepository = AppDataSource.getRepository(User);

    // 檢查資料庫有沒有資料
    const userCount = await userRepository.count();
    if (userCount === 0) {
        // 如果資料庫是空的，加一筆假資料
        const newUser = new User();
        newUser.name = '小明';
        newUser.email = 'xiaoming@example.com';
        await userRepository.save(newUser);
    }

    // 從資料庫拿所有使用者
    const users = await userRepository.find();

    // 回應給前端
    res.send(`Hello, TypeScript! 這裡是所有使用者：${JSON.stringify(users)}`);
}

// 函式表達式（function expression）
// export const getHome = function (req: Request, res: Response) {
//     res.send('Hello, TypeScript!');
// };

// 箭頭函式（arrow function）的寫法
// export const getHome = (req: Request, res: Response) => {
//     res.send('Hello, TypeScript!');
// };