import { Table, Column, Model, HasMany, DataType, Default } from 'sequelize-typescript';
import { Token } from "./Token";
import { Item } from "./Item";

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false
  })
  name?: string;

  @Column({
    unique: true,
    allowNull: false
  })
  email?: string;

  @Default('pending')
  @Column({
    allowNull: false,
    type: DataType.ENUM('active', 'pending')
  })
  status?: string;
 
  @Column({
    allowNull: false
  })
  password?: string;

  @HasMany(()=>Token)
  tokens: Token[] = []

  @HasMany(()=>Item)
  items: Item[] = [];
}
