import express from 'express';
import homeRoutes from './routes/homeRoutes'; // 載入剛剛的 routes
import pool from './config/db'; // 載入資料庫連線

const app = express();

// 額外測試資料庫連線
pool.query('SELECT NOW()')
    .then(result => {
        console.log('資料庫查詢測試成功:', result.rows[0]);
    })
    .catch(error => {
        console.error('資料庫查詢測試失敗:', error.message);
    });

app.use('/', homeRoutes); // 用剛剛的 routes 處理所有路徑

app.listen(3000, () => {
    console.log('伺服器跑在 http://localhost:3000');
})