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
import { CourseSchedule } from '@prisma/client';
import { CoursesScheduleService } from 'src/courses/service/courses-schedule/courses-schedule.service';

@Controller('course-schedule')
export class CourseScheduleController {
  constructor(private readonly service: CoursesScheduleService) {}
  //find courseSchedule of a courseID
  @Get('/:courseId')
  async getCourseContent(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.findAll(courseId);
  }

  //store courseSchedule of a courseID
  @Post()
  create(@Body() courseObj: CourseSchedule) {
    return this.service.create(courseObj);
  }

  //update a specific learning outcome
  @Put('/:courseId')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() courseSchedule: CourseSchedule,
  ) {
    return this.service.update(courseId, courseSchedule);
  }

  //remove a specific courseSchedule
  @Delete('/:courseId')
  delete(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.remove(courseId);
  }
}
