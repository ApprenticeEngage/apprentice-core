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
import { Enrollments } from '@prisma/client';
import { EnrollmentsService } from 'src/enrollments/services/enrollments/enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly service: EnrollmentsService) {}

  @Post('/')
  create(@Body() enrollment: Enrollments) {
    return this.service.create(enrollment);
  }

  @Get('/:courseId/:apprenticeId')
  findOne(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('apprenticeId', ParseIntPipe) apprenticeId: number,
  ) {
    return this.service.findOne(courseId, apprenticeId);
  }

  @Put('/:courseId/:apprenticeId')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('apprenticeId', ParseIntPipe) apprenticeId: number,
    @Body() enrollment: Enrollments,
  ) {
    return this.service.update(courseId, apprenticeId, enrollment);
  }

  @Delete('/:courseId/:apprenticeId')
  remove(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Param('apprenticeId', ParseIntPipe) apprenticeId: number,
  ) {
    return this.service.remove(courseId, apprenticeId);
  }
}
