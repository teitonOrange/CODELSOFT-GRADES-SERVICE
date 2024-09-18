import { IsString, IsNotEmpty, IsNumber, Min, Max, IsUUID } from "class-validator";

export class CreateGradeDto {

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

    @IsUUID()
    public userId: string;

    @IsUUID()
    public studentId: string;
}
