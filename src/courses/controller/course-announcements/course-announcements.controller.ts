import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CourseAnnouncements } from '@prisma/client';
import { CoursesAnnouncementsService } from 'src/courses/service/courses-announcements/courses-announcements.service';

@Controller('course-announcements')
export class CourseAnnouncementsController {
  constructor(private readonly service: CoursesAnnouncementsService) {}

  //find lo of a courseID
  @Get('/:courseId')
  async getCourseContent(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.findAll(courseId);
  }

  //store LO of a courseID
  @Post()
  async create(@Body() courseObj: CourseAnnouncements) {
    await this.service.create(courseObj);
    //updating the announcement counter of the course
  }

  //update a specific learning outcome
  @Put('/:courseId/:announcement_id')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('announcement_id', ParseIntPipe) announcement_id: number,
    @Body() courseLo: CourseAnnouncements,
  ) {
    return this.service.update(courseId, announcement_id, courseLo);
  }

  //remove a specific LO
  @Delete('/:courseId/:announcement_id')
  delete(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('announcement_id', ParseIntPipe) announcement_id: number,
  ) {
    return this.service.remove(courseId, announcement_id);
  }
}
