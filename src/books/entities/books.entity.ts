import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('books-2')
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
    yearPublished: string;

    @Column()
    description: string;
}