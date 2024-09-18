import { Module } from "@nestjs/common";
import { GradesController } from "./grades.controller";
import { GradesService } from "./grades.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [GradesController],
    providers: [GradesService],
    imports: [PrismaModule]
})
export class GradesModule {}