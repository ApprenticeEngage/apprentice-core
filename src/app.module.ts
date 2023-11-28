import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ApprenticeModule } from './apprentice/apprentice.module';
import { MentorModule } from './mentor/mentor.module';
import { DatabaseModule } from './database/database.module';
import { CurriculumController } from './curriculum/controller/curriculum/curriculum.controller';
import { SectionController } from './curriculum/controller/section/section.controller';
import { SectionLoController } from './curriculum/controller/section-lo/section-lo.controller';
import { TestController } from './curriculum/controller/test/test.controller';
import { LessonController } from './curriculum/controller/lesson/lesson.controller';
import { LessonResourcesController } from './curriculum/controller/lesson-resources/lesson-resources.controller';
import { CurriculumService } from './curriculum/services/curriculum/curriculum.service';
import { SectionService } from './curriculum/services/section/section.service';
import { SectionLoService } from './curriculum/services/section-lo/section-lo.service';
import { TestService } from './curriculum/services/test/test.service';
import { LessonService } from './curriculum/services/lesson/lesson.service';
import { LessonResourcesService } from './curriculum/services/lesson-resources/lesson-resources.service';
import { EnrollmentsModule } from './enrollments/enrollments.module';

@Module({
  imports: [CoursesModule, ApprenticeModule, MentorModule, DatabaseModule, EnrollmentsModule],
  controllers: [AppController, CurriculumController, SectionController, SectionLoController, TestController, LessonController, LessonResourcesController],
  providers: [AppService, CurriculumService, SectionService, SectionLoService, TestService, LessonService, LessonResourcesService],
})
export class AppModule {}
