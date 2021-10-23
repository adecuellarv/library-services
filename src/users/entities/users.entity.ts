import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    iduser: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    paswd: string;
}