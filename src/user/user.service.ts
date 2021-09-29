import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './user';
import { User } from './user.entity';
import {response, Response } from 'express';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository){}

    create (user: UserDTO): Promise<UserDTO>{
  
        return this.userRepository.save(user);
    }

    findAll(): Promise<UserDTO[]>{
        return this.userRepository.find();
    }

    login(_username: string, _password: string):any{
        
      let user =  this.userRepository.findOne({where:{emailOrphone: _username, password:_password}}, {relations: ["posts"] });
    
        if(user){
           return user;
        }else{
            throw new HttpException({
                status:HttpStatus.INTERNAL_SERVER_ERROR,
                error:"Dieser Benutzer existiert nicht"
            },HttpStatus.INTERNAL_SERVER_ERROR)
        }
                                           
    }

    
}
