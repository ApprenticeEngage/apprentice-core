import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Courses } from '@prisma/client';
import { CourseService } from '../service/service.service';

@Controller('courses')
export class ControllerController {
  constructor(private readonly service: CourseService) {}
  //for main course page
  @Get('/main/:courseId')
  async getCourseContent(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.findOne(courseId);
  }

  //storing courses object
  @Post()
  create(@Body() courseObj: Courses) {
    return this.service.create(courseObj);
  }
}
