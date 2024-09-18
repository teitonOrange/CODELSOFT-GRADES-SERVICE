import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GradesModule } from './grades/grades.module';

@Module({
  imports: [GradesModule],
})
export class AppModule {}
