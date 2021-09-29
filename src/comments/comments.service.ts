import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommentDTO } from './comment';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService  {
    constructor(@InjectRepository(Comment) private commentRepository){
    }

    create (post: CommentDTO): Promise<Comment>{
        return this.commentRepository.save(post);
    }


    findAll(): Promise<Comment[]>{
        return this.commentRepository.find();
    }

    findOne(_id: number){
        let comment = this.commentRepository.findOne({id: _id}, {relations: ["Post"] });
        if(comment){
            return comment;
        }
        else{
            return "Dieser Commentar existiert nicht";
        }
    }

    findByPost(_id: number){
        let comment = this.commentRepository.findOne({post: _id});
        if(comment){
            return comment;
        }
        else{
            return "Dieser Commentar existiert nicht";
        }
    }
}
