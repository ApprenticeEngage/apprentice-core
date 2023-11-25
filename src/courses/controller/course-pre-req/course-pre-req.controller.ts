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
import { CoursePreReq } from '@prisma/client';
import { CoursesPreReqService } from 'src/courses/service/courses-pre-req/courses-pre-req.service';
@Controller('course-pre-req')
export class CoursePreReqController {
  constructor(private readonly service: CoursesPreReqService) {}
  //find lo of a courseID
  @Get('/:courseId')
  async getCourseContent(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.findAll(courseId);
  }

  //store prereq of a courseID
  @Post()
  create(@Body() courseObj: CoursePreReq) {
    return this.service.create(courseObj);
  }

  //update a specific learning outcome
  @Put('/:courseId/:serialNo')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
    @Body() courseLo: CoursePreReq,
  ) {
    return this.service.update(courseId, serialNo, courseLo);
  }

  //remove a specific prereq
  @Delete('/:courseId/:serialNo')
  delete(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
  ) {
    return this.service.remove(courseId, serialNo);
  }
}
