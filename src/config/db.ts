import { DataSource } from 'typeorm'; // 載入 TypeORM 的 DataSource
import * as dotenv from 'dotenv'; // 載入 dotenv


// 載入 .env 檔案
dotenv.config();

// 建立 TypeORM 的資料來源（連線設定）
const AppDataSource = new DataSource({
    type: 'postgres', // 資料庫類型是 PostgreSQL
    host: process.env.DB_HOST, // 從 .env 讀主機
    port: Number(process.env.DB_PORT), // 從 .env 讀埠
    username: process.env.DB_USER, // 從 .env 讀使用者名稱
    password: process.env.DB_PASSWORD, // 從 .env 讀密碼
    database: process.env.DB_NAME, // 從 .env 讀資料庫名稱
    entities: ['src/entities/*.ts'], // 告訴 TypeORM 去哪找資料表定義
    synchronize: true, // 自動建立資料表（開發時用，正式環境要關掉）
    logging: true, // 顯示 SQL 語法（方便除錯）
});

// 初始化連線
AppDataSource.initialize()
    .then(() => {
        console.log('成功連到資料庫（用 TypeORM）！');
    })
    .catch((err) => {
        console.error('連線失敗:', err);
    });

export default AppDataSource; // 輸出這個連線池