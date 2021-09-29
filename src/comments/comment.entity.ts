import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Posts } from '../posts/post.entity';

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'text'})
    content:string;

    @Column()
    publishedDate:string;

    @ManyToOne(() => Posts, post => post.comments)
    post: Posts;


}