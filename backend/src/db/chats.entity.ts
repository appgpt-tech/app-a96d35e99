//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chats')
export class chatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  chatID: string;

  @Column('integer', { nullable: true })
  participants: number;

  @Column('text', { nullable: true })
  chatName: string;

  @Column('integer', { nullable: true })
  lastMessage: number;
}
