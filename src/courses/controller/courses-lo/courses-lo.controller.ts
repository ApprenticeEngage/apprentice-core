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
import { CourseLO } from '@prisma/client';
import { CoursesLoService } from 'src/courses/service/courses-lo/courses-lo.service';

@Controller('courses-lo')
export class CoursesLoController {
  constructor(private readonly service: CoursesLoService) {}

  //find lo of a courseID
  @Get('/:courseId')
  async getCourseContent(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.findAll(courseId);
  }

  //store LO of a courseID
  @Post()
  create(@Body() courseObj: CourseLO) {
    return this.service.create(courseObj);
  }

  //update a specific learning outcome
  @Put('/:courseId/:serialNo')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
    @Body() courseLo: CourseLO,
  ) {
    return this.service.update(courseId, serialNo, courseLo);
  }

  //remove a specific LO
  @Delete('/:courseId/:serialNo')
  delete(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
  ) {
    return this.service.remove(courseId, serialNo);
  }
}
