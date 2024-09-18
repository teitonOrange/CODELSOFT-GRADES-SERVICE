import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { CreateGradeDto } from "./dto/create-grade.dto";
import { GradesService } from "./grades.service";
import { GradeDto } from "./dto/grade.dto";
import { UpdateGradeDto } from "./dto/update-grade.dto";

@Controller('grades')
export class GradesController {

    constructor(private readonly gradesService: GradesService) {}

    @Post()
    createGrade(@Body() dto: CreateGradeDto) : Promise<GradeDto> {
        //validar guiiid del usuario
        //
        return this.gradesService.createGrade(dto);
    }

    @Put(':gradeId/:studentId')
    updateGrade(@Body() dto: UpdateGradeDto, @Param('gradeId') gradeId: string, @Param('studentId') studentId: string): Promise<GradeDto> {
        return this.gradesService.updateGrade(dto, gradeId, studentId);
    }

}