import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGradeDto } from "./dto/create-grade.dto";
import { GradeDto } from "./dto/grade.dto";
import { UpdateGradeDto } from "./dto/update-grade.dto";

@Injectable()
export class  GradesService {

    constructor(private readonly prisma: PrismaService) {}

    async createGrade(createGradeDto: CreateGradeDto): Promise<GradeDto> {
        const { subjectName, grade, gradeName, comment, userId, studentId } = createGradeDto;

        return this.prisma.grade.create({
            data: {
                subjectName,
                grade,
                gradeName,
                comment,
                userId,
                studentId
            }
        });
        
    }

    async  updateGrade(updateGradeDto: UpdateGradeDto, gradeId: string,  studentId: string): Promise<GradeDto> {
        return this.prisma.grade.update({
            where: {
                id: gradeId,
                studentId: studentId
            },
            data: {
                subjectName: updateGradeDto.subjectName,
                grade: updateGradeDto.grade,
                gradeName: updateGradeDto.gradeName,
                comment: updateGradeDto.comment,
            }
        });
    }
}




