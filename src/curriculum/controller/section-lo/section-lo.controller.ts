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
import { SectionLO } from '@prisma/client';
import { SectionLoService } from 'src/curriculum/services/section-lo/section-lo.service';

@Controller('curriculum/section/section-lo')
export class SectionLoController {
  constructor(private readonly service: SectionLoService) {}

  //find all the learning outcomes associated with a Section
  @Get('/:currId/:secId')
  async getSectionsPerCurriculum(
    @Param('currId', ParseIntPipe) currId: number,
    @Param('secId', ParseIntPipe) secId: number,
  ) {
    return this.service.findAll(currId, secId);
  }

  //   //find a specific sections associated with a curriculum
  //   @Get('/:currId/:secId')
  //   async getSection(
  //     @Param('currId', ParseIntPipe) currId: number,
  //     @Param('secId', ParseIntPipe) secId: number,
  //   ) {
  //     return this.service.findOne(currId, secId);
  //   }

  //store LO of a Section
  @Post()
  create(@Body() sectionLo: SectionLO) {
    return this.service.create(sectionLo);
  }

  //update the entire arr of lo of a particular section
  @Put('/:currId/:secId/:serial')
  update(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('serial', ParseIntPipe) serial: number,
    @Body() sectionLo: SectionLO,
  ) {
    return this.service.update(secId, currId, sectionLo, serial);
  }

  //remove all LO associated with a section
  @Delete('/:currId/:secId/:serial')
  delete(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('serial', ParseIntPipe) serial: number,
  ) {
    return this.service.remove(secId, currId, serial);
  }
}
