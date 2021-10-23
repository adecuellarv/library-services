import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
export class Books {
    @PrimaryGeneratedColumn()
    idbook: number;

    @Column({nullable: false})
    image: string;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    author: string;

    @Column({nullable: false})
    yearPublished: string;

    @Column({nullable: false})
    description: string;
}