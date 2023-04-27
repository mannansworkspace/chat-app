import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Chat } from './chat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => Chat, (Chat) => Chat.recipient1)
  @OneToMany((type) => Chat, (Chat) => Chat.recipient2)
  chats: Chat[];
}
