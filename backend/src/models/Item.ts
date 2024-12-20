import { Table, Column, Model, ForeignKey, DataType, BelongsTo, Default } from 'sequelize-typescript';
import { User } from "./User";

@Table
export class Item extends Model<Item> {
  @Column({
    allowNull: false
  })
  title?: string;

  @Column({
    allowNull: false,
    unique: true
  }) 
  slug?: string

  @Default('todo')
  @Column({
    allowNull: false,
    type: DataType.ENUM('Todo', 'In Progress','Done')
  })
  status?: string;
 
  @ForeignKey(()=>User)
  @Column({
    allowNull: false,
  }) 
  userId?: number;

  @BelongsTo(()=>User)
  user?: User;
}
