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
import { Curriculum } from '@prisma/client';
import { CurriculumService } from 'src/curriculum/services/curriculum/curriculum.service';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly service: CurriculumService) {}

  //find lo of a curriculum
  @Get('/:currId')
  async getCourseContent(@Param('currId', ParseIntPipe) currId: number) {
    return this.service.findAll(currId);
  }

  //store LO of a curriculum
  @Post()
  create(@Body() curr: Curriculum) {
    return this.service.create(curr);
  }

  //update a specific learning outcome
  @Put('/:currId')
  update(
    @Param('currId', ParseIntPipe) courseId: number,
    @Body() Curriculum: Curriculum,
  ) {
    return this.service.update(courseId, Curriculum);
  }

  //remove a specific LO
  @Delete('/:currId')
  delete(@Param('currId', ParseIntPipe) courseId: number) {
    return this.service.remove(courseId);
  }
}
