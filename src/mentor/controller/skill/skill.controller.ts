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
import { Skill } from '@prisma/client';
import { SkillService } from 'src/mentor/service/skill/skill.service';

@Controller('skill')
export class SkillController {
  constructor(private readonly service: SkillService) {}

  @Post('/create')
  create(@Body() skill: Skill) {
    return this.service.create(skill);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  //updating a skill
  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() skill: Skill) {
    return this.service.update(id, skill);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
