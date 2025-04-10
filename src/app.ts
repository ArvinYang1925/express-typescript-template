import 'reflect-metadata'; // 一定要放在最上面！

import express from 'express';
import homeRoutes from './routes/homeRoutes'; // 載入剛剛的 routes
import AppDataSource from './config/db'; // 載入資料庫連線

const app = express();

// 額外測試資料庫連線（使用 TypeORM 替代 pool.query）
AppDataSource.initialize()
    .then(() => {
        // 資料庫已連線成功，可以執行查詢
        return AppDataSource.query('SELECT NOW()');
    })
    .then(result => {
        console.log('資料庫查詢測試成功:', result[0]);
        
        // 啟動 Express 伺服器
        app.use('/', homeRoutes); // 用剛剛的 routes 處理所有路徑
        
        app.listen(3000, () => {
            console.log('伺服器跑在 http://localhost:3000');
        });
    })
    .catch(error => {
        console.error('資料庫查詢測試失敗:', error.message);
    });