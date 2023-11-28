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
import { Lesson } from '@prisma/client';
import { LessonService } from 'src/curriculum/services/lesson/lesson.service';

@Controller('curriculum/section/lesson')
export class LessonController {
  constructor(private readonly service: LessonService) {}

  //find a the lesson associated with a curriculum; cuz there can only be one lesson associated with a section
  @Get('/single/:currId/:secId/:lesson')
  async getLesson(
    @Param('currId', ParseIntPipe) currId: number,
    @Param('secId', ParseIntPipe) secId: number,
    @Param('lesson', ParseIntPipe) lesson: number,
  ) {
    return this.service.findOne(currId, secId, lesson);
  }

  //find all lessons associated with a section
  @Get('/all/:currId/:secId/')
  async getLessons(
    @Param('currId', ParseIntPipe) currId: number,
    @Param('secId', ParseIntPipe) secId: number,
  ) {
    return this.service.findAll(currId, secId);
  }

  //store LO of a Section
  @Post()
  create(@Body() lesson: Lesson) {
    return this.service.create(lesson);
  }

  //update the entire arr of lo of a particular section
  @Put('/:currId/:secId/:lessonid')
  update(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('lessonid', ParseIntPipe) lessonid: number,
    @Body() lesson: Lesson,
  ) {
    return this.service.update(secId, currId, lessonid, lesson);
  }

  //remove all LO associated with a section
  @Delete('/:currId/:secId/:lessonid')
  delete(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('lessonid', ParseIntPipe) lessonid: number,
  ) {
    return this.service.remove(secId, currId, lessonid);
  }
}
