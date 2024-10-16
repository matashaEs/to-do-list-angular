import { Table, Column, Model, ForeignKey, DataType, BelongsTo, Default } from 'sequelize-typescript';
import { User } from "./User";

@Table
export class Item extends Model<Item> {
  @Column({
    allowNull: false
  })
  title?: string;

  @Default('todo')
  @Column({
    allowNull: false,
    type: DataType.ENUM('todo', 'done')
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
