import { IsString, IsEmpty, Min } from "class-validator";

export class CommentDTO {
    
    @IsEmpty()
    @IsString()
    content: string;

   
    @IsString()
    publishedDate:string;

}
