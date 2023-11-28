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
import { ApprenticeService } from '../service/service.service';
import { Apprentice } from '@prisma/client';

@Controller('apprentice')
export class ApprenticeController {
  constructor(private readonly service: ApprenticeService) {}

  @Post('/create')
  create(@Body() apprentice: Apprentice) {
    return this.service.create(apprentice);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  //updating a skill
  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() apprentice: Apprentice,
  ) {
    return this.service.update(id, apprentice);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
