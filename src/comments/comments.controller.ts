import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CommentDTO } from './comment';
import { Comment } from './comment.entity';
import { CommentsService } from './comments.service';


@Controller('comments')
export class CommentsController {

    constructor(private commentService: CommentsService){}

    //"post/"
    @Post()
    create(@Body() comment:CommentDTO): Promise<Comment> {
        return this.commentService.create(comment);
    }

    // post
    @Get()
    findAll():Promise<Comment[]>{
        return this.commentService.findAll();
    }

    @Get('/find')
    findOne(@Param('id') id){
        return this.commentService.findOne(id);
    }

    @Get('/find-by-post')
    findPost(@Param('id') id){
        return this.commentService.findByPost(id);
    }
}
