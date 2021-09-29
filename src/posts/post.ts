import { IsString, IsEmpty, Min } from "class-validator";

export class PostDTO {
    
    @Min(6)
    @IsEmpty()
    @IsString()
    title: string;

   
    @IsString()
    dateOfPublished:string;

    @IsString()
    photos:string;

}
