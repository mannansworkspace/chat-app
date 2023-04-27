import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'json',
    array: true,
  })
  messages: Message[];

  @Column()
  @ManyToOne((type) => User, (user) => user.chats)
  recipient1: number;

  @Column()
  @ManyToOne((type) => User, (user) => user.chats)
  recipient2: number;

}

interface Message {
  status: string;
  text: string;
}
