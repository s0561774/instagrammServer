import { Controller, Post,Body, Get, Param, Req, Res } from '@nestjs/common';
import { UserDTO } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    //"user/"
    @Post()
    create(@Body() user:UserDTO): Promise<UserDTO> {
        return this.userService.create(user);
    }

    // user
    @Get()
    findAll():Promise<UserDTO[]>{
        return this.userService.findAll();
    }

    @Get('/login/:email/:password')
    login(@Param('email') email:string, @Param('password') password:string, @Res() res ){
        console.log(email, password)
       let returnResponse = this.userService.login(email, password);
       returnResponse.then(user=>{
           if(user == null || user == undefined){
               res.status(500).json({message:"Dieser benutzer existiert nicht"})
           }else{
               res.json(user);
           }
       })
       
    }

}
