import { IsString, IsEmpty, Min } from "class-validator";

export class UserDTO {
    
    @IsString()
    emailOrphone: string;

    @Min(6)
    @IsEmpty()
    @IsString()
    fullname:string;

    @IsEmpty()
    @IsString()
    username:string;

    @Min(4)
    @IsEmpty()
    @IsString()
    password:string;


}
