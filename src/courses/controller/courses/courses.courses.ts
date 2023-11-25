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
import { Courses } from '@prisma/client';
import { CourseService } from '../../service/courses/service.service';

@Controller('courses')
export class ControllerController {
  constructor(private readonly service: CourseService) {}
  //for main course page
  @Get('/feed')
  async getCourses() {
    console.log('hello');
    return this.service.findAll();
  }
  //for fetching one course obj
  @Get('/:courseId')
  async getCourseContent(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.findOne(courseId);
  }

  //storing courses object
  @Post()
  create(@Body() courseObj: Courses) {
    return this.service.create(courseObj);
  }

  //privilege to the mentor only
  @Put('/:courseId')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() courseObj: Courses,
  ) {
    return this.service.update(courseId, courseObj);
  }

  //privilege only to mentor
  @Delete('/:courseId')
  delete(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.remove(courseId);
  }
}
