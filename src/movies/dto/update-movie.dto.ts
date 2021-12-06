import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto){}
// export class UpdateMovieDto{
    
//     @IsString()
//     readonly title?: string; //?사용 optional
    
//     @IsNumber()
//     readonly year?: number;

//     @IsString({each: true})
//     readonly genres?: string[];
// }