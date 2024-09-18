import { IsInt, IsNotEmpty, isNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class UpdateGradeDto {

    @IsString()
    @IsNotEmpty()
    public subjectName: string;

    @IsNumber()
    @Min(1)
    @Max(7)
    public grade: number;

    @IsString()
    @IsNotEmpty()
    public gradeName: string;

    @IsString()
    @IsNotEmpty()
    public comment: string;

}
