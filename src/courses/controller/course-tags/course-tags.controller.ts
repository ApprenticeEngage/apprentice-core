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
import { CourseTag } from '@prisma/client';
import { CoursesTagsService } from 'src/courses/service/courses-tags/courses-tags.service';

@Controller('course-tags')
export class CourseTagsController {
  constructor(private readonly service: CoursesTagsService) {}
  //find lo of a courseID
  @Get('/:courseId')
  async getCourseContent(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.findAll(courseId);
  }

  //store course tag of a courseID
  @Post()
  create(@Body() courseObj: CourseTag) {
    return this.service.create(courseObj);
  }

  //update a specific learning outcome
  @Put('/:courseId/:serialNo')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
    @Body() courseTag: CourseTag,
  ) {
    return this.service.update(courseId, serialNo, courseTag);
  }

  //remove a specific Course Tag
  @Delete('/:courseId/:serialNo')
  delete(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
  ) {
    return this.service.remove(courseId, serialNo);
  }
}
