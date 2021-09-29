import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostDTO } from './post';
import { Posts } from './post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService){}

    //"post/"
    @Post()
    create(@Body() post:PostDTO): Promise<PostDTO> {
        return this.postService.create(post);
    }

    // post
    @Get()
    findAll():Promise<Posts[]>{
        return this.postService.findAll();
    }

    @Get('/find')
    findOne(@Param('id') id){
        return this.postService.findOne(id);
    }

    @Get('/find-by-user')
    findUser(@Param('id') id){
        return this.postService.findByUser(id);
    }
    
}
