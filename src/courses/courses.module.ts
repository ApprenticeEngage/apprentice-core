import { Module } from '@nestjs/common';
import { CourseService } from './service/service.service';
import { ControllerController } from './controller/courses.courses';

@Module({
  providers: [CourseService],
  controllers: [ControllerController],
})
export class CoursesModule {}
