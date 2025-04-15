import "reflect-metadata"; // 一定要放在最上面！

import express from "express";
import homeRoutes from "./routes/homeRoutes"; // 載入剛剛的 routes
import AppDataSource from "./config/db"; // 載入資料庫連線

const app = express();

// 額外測試資料庫連線（使用 TypeORM 替代 pool.query）
AppDataSource.initialize()
  .then(() => {
    // 資料庫已連線成功，可以執行查詢
    return AppDataSource.query("SELECT NOW()");
  })
  .then((result) => {
    console.log("資料庫查詢測試成功:", result[0]);

    // 啟動 Express 伺服器
    app.use("/", homeRoutes); // 用剛剛的 routes 處理所有路徑

    // 部署 Render 這邊要加上 process.env.PORT
    // 因為 Render 會自動將 PORT 環境變數注入到容器中
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("資料庫查詢測試失敗:", error.message);
  });
