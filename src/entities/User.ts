import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"; // 載入 TypeORM 的裝飾器

@Entity() // 告訴 TypeORM 這是一個資料表
export class User {
  @PrimaryGeneratedColumn() // 主鍵，會自動遞增
  id!: number;

  @Column() // 一個欄位，叫 name
  name!: string;

  @Column() // 一個欄位，叫 email
  email!: string;
}
