//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
export class messagesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  senderID: number;

  @Column('integer', { nullable: true })
  chatID: number;

  @Column('text', { nullable: true })
  content: string;

  @Column('date', { nullable: true })
  timestamp: Date;
}
