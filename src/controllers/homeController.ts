// Controller 是負責處理 API 邏輯的地方

import { Request, Response } from 'express'; // 載入 Express 的型別

// 這是一個簡單的 controller，處理首頁的邏輯

// 函式陳述式寫法
// Request 和 Response 是 Express 提供的型別，TypeScript 會用它來檢查我們的程式碼。
export function getHome(req: Request, res: Response) {
    res.send('Hello, TypeScript!');
}

// 函式表達式（function expression）
// export const getHome = function (req: Request, res: Response) {
//     res.send('Hello, TypeScript!');
// };

// 箭頭函式（arrow function）的寫法
// export const getHome = (req: Request, res: Response) => {
//     res.send('Hello, TypeScript!');
// };