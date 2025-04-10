import { Pool } from 'pg'; // 載入 pg 的 Pool
import * as dotenv from 'dotenv'; // 載入 dotenv


// 載入 .env 檔案
dotenv.config();

// 建立一個連線池
const pool = new Pool({
    user: process.env.DB_USER, // 從 .env 讀取使用者名稱
    host: process.env.DB_HOST, // 從 .env 讀取主機
    database: process.env.DB_NAME, // 從 .env 讀取資料庫名稱
    password: process.env.DB_PASSWORD, // 從 .env 讀取密碼
    port: Number(process.env.DB_PORT), // 從 .env 讀取埠（轉成數字）
});

// 測試連線
pool.connect()
    .then(client => {
        console.log('成功連到資料庫！');
        client.release(); // 釋放連線回連線池
    })
    .catch(err => {
        console.error('連線失敗:', err.message);
    });

export default pool; // 輸出這個連線池