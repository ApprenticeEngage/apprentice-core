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
import { MentorService } from '../service/service.service';
import { Mentor } from '@prisma/client';

@Controller('mentor')
export class MentorController {
  constructor(private readonly service: MentorService) {}

  @Post('/create')
  create(@Body() mentor: Mentor) {
    return this.service.create(mentor);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  //updating a skill
  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() mentor: Mentor) {
    return this.service.update(id, mentor);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
