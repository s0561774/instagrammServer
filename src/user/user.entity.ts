import { ApiProperty } from "@nestjs/swagger";
import { Comment } from '../comments/comment.entity';
import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import { Posts } from "src/posts/post.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty() //this decorator is for the test. The nameof the test library is swagger
    @Column({nullable:false})
    emailOrphone:string;

    @ApiProperty()
    @Column({nullable:false})
    fullname:string;

    @ApiProperty()
    @Column({nullable:false})
    username:string;

    @ApiProperty()
    @Column({nullable:false})
    password: string;
    
    @OneToMany(type=> User, user=> user.id)
    followers: User[]

    @OneToMany(type=> Posts, post=> post.user)
    posts: Posts[]

}