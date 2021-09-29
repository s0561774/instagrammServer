import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PostDTO } from './post';
import { Posts } from './post.entity';
//typeormcrudservice permet de creer les methodes nesseccaire  pour une api rest 
//crud veut dire create read update delete
// create correspond au requete de type post
// read correspond au request de type get
//update correspond au request de type put
//delete correspond au requete de type delete

@Injectable()
export class PostsService  {
    constructor(@InjectRepository(Posts) private postRepository){
    }

    create (post: PostDTO): Promise<PostDTO>{
  
        return this.postRepository.save(post);
    }

    findAll(): Promise<Posts[]>{
        return this.postRepository.find();
    }

    findOne(_id: number){
        let post = this.postRepository.findOne({id: _id}, {relations: ["comments"] });
        if(post){
            return post;
        }
        else{
            return "Dieser Post existiert nicht";
        }
    }

    findByUser(_id: number){
        let post = this.postRepository.findOne({user: _id}, {relations: ["comments"] });
        if(post){
            return post;
        }
        else{
            return "Dieser Post existiert nicht";
        }
    }
}
