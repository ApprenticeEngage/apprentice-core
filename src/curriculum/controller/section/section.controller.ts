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
import { Section } from '@prisma/client';
import { SectionService } from 'src/curriculum/services/section/section.service';

@Controller('curriculum/section')
export class SectionController {
  constructor(private readonly service: SectionService) {}

  //find all sections associated with a curriculum
  @Get('/:currId')
  async getSectionsPerCurriculum(
    @Param('currId', ParseIntPipe) currId: number,
  ) {
    return this.service.findAll(currId);
  }

  //find a specific sections associated with a curriculum
  @Get('/:currId/:secId')
  async getSection(
    @Param('currId', ParseIntPipe) currId: number,
    @Param('secId', ParseIntPipe) secId: number,
  ) {
    return this.service.findOne(currId, secId);
  }

  //store LO of a Section
  @Post()
  create(@Body() curr: Section) {
    return this.service.create(curr);
  }

  //update a specific learning outcome
  @Put('/:currId/:secId')
  update(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Body() Section: Section,
  ) {
    return this.service.update(secId, currId, Section);
  }

  //remove a specific LO
  @Delete('/:currId/:secId')
  delete(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
  ) {
    return this.service.remove(secId, currId);
  }
}
