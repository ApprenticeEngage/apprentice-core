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
import { Test } from '@prisma/client';
import { TestService } from 'src/curriculum/services/test/test.service';

@Controller('curriculum/section/test')
export class TestController {
  constructor(private readonly service: TestService) {}

  //find a the test associated with a curriculum; cuz there can only be one test associated with a section
  @Get('/single/:currId/:secId/:test')
  async getTest(
    @Param('currId', ParseIntPipe) currId: number,
    @Param('secId', ParseIntPipe) secId: number,
    @Param('test', ParseIntPipe) test: number,
  ) {
    return this.service.findOne(currId, secId, test);
  }

  //find all tests associated with a section
  @Get('/all/:currId/:secId/')
  async getTests(
    @Param('currId', ParseIntPipe) currId: number,
    @Param('secId', ParseIntPipe) secId: number,
  ) {
    return this.service.findAll(currId, secId);
  }

  //store LO of a Section
  @Post()
  create(@Body() test: Test) {
    return this.service.create(test);
  }

  //update the entire arr of lo of a particular section
  @Put('/:currId/:secId/:testid')
  update(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('testid', ParseIntPipe) testid: number,
    @Body() test: Test,
  ) {
    return this.service.update(secId, currId, testid, test);
  }

  //remove all LO associated with a section
  @Delete('/:currId/:secId/:testid')
  delete(
    @Param('secId', ParseIntPipe) secId: number,
    @Param('currId', ParseIntPipe) currId: number,
    @Param('testid', ParseIntPipe) testid: number,
  ) {
    return this.service.remove(secId, currId, testid);
  }
}
