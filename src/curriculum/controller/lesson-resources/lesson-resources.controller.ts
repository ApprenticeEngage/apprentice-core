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
import { LessonResources } from '@prisma/client';
import { LessonResourcesService } from 'src/curriculum/services/lesson-resources/lesson-resources.service';

@Controller('curriculum/section/lesson/lesson-resources')
export class LessonResourcesController {
  constructor(private readonly service: LessonResourcesService) {}

  //find a the resources associated with a single lesson;
  @Get('/:currId/:secId/:lesson')
  async getLesson(
    @Param('currId', ParseIntPipe) currId: number,
    @Param('secId', ParseIntPipe) secId: number,
    @Param('lesson', ParseIntPipe) lesson: number,
  ) {
    return this.service.findAll(currId, secId, lesson);
  }

  //store LO of a Section
  @Post()
  create(@Body() lessonRes: LessonResources) {
    return this.service.create(lessonRes);
  }

  //update the entire arr of lo of a particular section
  @Put('/:currId/:secId/:lessonid/:serialNo')
  update(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('lessonid', ParseIntPipe) lessonid: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
    @Body() lessonRes: LessonResources,
  ) {
    return this.service.update(secId, currId, lessonid, serialNo, lessonRes);
  }

  //remove all LO associated with a section
  @Delete('/:currId/:secId/:lessonid/:serialNo')
  delete(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('lessonid', ParseIntPipe) lessonid: number,
    @Param('serialNo', ParseIntPipe) serialNo: number,
  ) {
    return this.service.remove(secId, currId, lessonid, serialNo);
  }
}
