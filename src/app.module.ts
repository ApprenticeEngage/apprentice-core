import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ApprenticeModule } from './apprentice/apprentice.module';
import { MentorModule } from './mentor/mentor.module';

@Module({
  imports: [CoursesModule, ApprenticeModule, MentorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
