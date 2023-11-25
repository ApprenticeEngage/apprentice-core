import { Module } from '@nestjs/common';
import { CourseService } from './service/courses/service.service';
import { ControllerController } from './controller/courses/courses.courses';

@Module({
  providers: [CourseService],
  controllers: [ControllerController],
})
export class CoursesModule {}
