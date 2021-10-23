import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books {
    @PrimaryGeneratedColumn()
    idbook: number;

    @Column()
    image: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    yearpublished: string;

    @Column()
    description: string;
}