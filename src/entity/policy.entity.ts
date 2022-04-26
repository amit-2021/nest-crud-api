import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Policy {

    @PrimaryGeneratedColumn()
    PolicyId: number;

    @Column()
    Name: string;

    @Column()
    Details: string;
}