import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    UserId: number;

    @Column()
    UserName: string;

    @Column()
    UserInfo: string;
}