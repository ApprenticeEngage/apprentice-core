import { Module } from '@nestjs/common';
import { CourseService } from './service/courses/service.service';
import { ControllerController } from './controller/courses/courses.courses';
import { CoursesLoController } from './controller/courses-lo/courses-lo.controller';
import { CourseAnnouncementsController } from './controller/course-announcements/course-announcements.controller';
import { CourseTagsController } from './controller/course-tags/course-tags.controller';
import { CoursePreReqController } from './controller/course-pre-req/course-pre-req.controller';
import { CourseScheduleController } from './controller/course-schedule/course-schedule.controller';
import { CoursesLoService } from './service/courses-lo/courses-lo.service';
import { CoursesAnnouncementsService } from './service/courses-announcements/courses-announcements.service';
import { CoursesTagsService } from './service/courses-tags/courses-tags.service';
import { CoursesPreReqService } from './service/courses-pre-req/courses-pre-req.service';
import { CoursesScheduleService } from './service/courses-schedule/courses-schedule.service';

@Module({
  providers: [
    CourseService,
    CoursesLoService,
    CoursesAnnouncementsService,
    CoursesTagsService,
    CoursesPreReqService,
    CoursesScheduleService,
  ],
  controllers: [
    ControllerController,
    CoursesLoController,
    CourseAnnouncementsController,
    CourseTagsController,
    CoursePreReqController,
    CourseScheduleController,
  ],
})
export class CoursesModule {}
