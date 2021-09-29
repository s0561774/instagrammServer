import { ApiProperty } from "@nestjs/swagger";
import { Comment } from '../comments/comment.entity';
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, ManyToOne } from "typeorm";
import { User } from "src/user/user.entity";

@Entity()
export class Posts{
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty() //this decorator is for the test. The nameof the test library is swagger but 
    @Column()
    title:string;

    @ApiProperty()
    @Column()
    photos:string;

    @ApiProperty()
    @Column({default: Date.now().toString()})
    dateOfPublished:string;

    @ApiProperty({ type: () => Comment })
    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];

    @ManyToOne(type => User, user => user.posts)
    user: User;

}