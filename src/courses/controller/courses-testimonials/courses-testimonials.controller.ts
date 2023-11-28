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
import { CourseTestimonials } from '@prisma/client';
import { CoursesTestimonialsService } from 'src/courses/service/courses-testimonials/courses-testimonials.service';

@Controller('courses/courses-testimonials')
export class CoursesTestimonialsController {
  constructor(private readonly service: CoursesTestimonialsService) {}
  //find all test of course
  @Get('/course/:courseId')
  async getCourseTestimonials(
    @Param('courseId', ParseIntPipe) courseId: number,
  ) {
    return this.service.findAllCourseTestimonials(courseId);
  }

  //find all test of apprentice
  @Get('/apprentice/:apprenticeId')
  async getAllApprenticeTestimonials(
    @Param('apprenticeId', ParseIntPipe) apprenticeId: number,
  ) {
    return this.service.findAllApprenticeTestimonials(apprenticeId);
  }
  //store course tag of a courseID
  @Post()
  create(@Body() courseTestimonials: CourseTestimonials) {
    return this.service.create(courseTestimonials);
  }

  //update a specific learning outcome
  @Put('/:courseId/:serialNo')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
    @Body() courseTestimonials: CourseTestimonials,
  ) {
    return this.service.update(courseId, serialNo, courseTestimonials);
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
