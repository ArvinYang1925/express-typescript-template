// Router 是 Express 提供的工具，用來管理路徑。

import { Router } from "express"; // 載入 Express 的 Router
import { getHome } from "../controllers/homeController"; // 載入剛剛的 controller

const router = Router(); // 建一個 router 物件

// 定義路徑：當有人進到 '/' 時，用 getHome 處理
router.get("/", getHome);

export default router; // 輸出這個 router
