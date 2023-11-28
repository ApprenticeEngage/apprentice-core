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
import { MentorSkill } from '@prisma/client';
import { MentorSkillService } from 'src/mentor/service/mentor-skill/mentor-skill.service';

@Controller('mentor/mentor-skill')
export class MentorSkillController {
  constructor(private readonly service: MentorSkillService) {}

  @Post('/create')
  create(@Body() skill: MentorSkill) {
    return this.service.create(skill);
  }

  @Get('/:id/:skillId')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Param('skillId', ParseIntPipe) skillId: number,
  ) {
    return this.service.findOne(id, skillId);
  }

  //updating a skill
  @Put('/:id/:skillId')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Param('id', ParseIntPipe) skillId: number,
    @Body() skill: MentorSkill,
  ) {
    return this.service.update(id, skillId, skill);
  }

  @Delete('/:id/:skillId')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Param('id', ParseIntPipe) skillId: number,
  ) {
    return this.service.remove(id, skillId);
  }
}
