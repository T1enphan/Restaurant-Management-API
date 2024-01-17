import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum ROLES {
  ADMIN = "ADMIN",
  MOD   = "MOD",
  USER  = "USER",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  firstName : string;
  @Column()
  lastName : string;
  @Column({default: ROLES.USER})
  roles : ROLES;  
  @Exclude()
  // Exclude() che giấu dữ liệu khi thêm mới
  password: string;
}
