import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ApprenticeModule } from './apprentice/apprentice.module';
import { MentorModule } from './mentor/mentor.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CoursesModule, ApprenticeModule, MentorModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
