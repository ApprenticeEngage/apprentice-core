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
import { ApprenticeStats } from '@prisma/client';
import { ApprenticeStatsService } from 'src/apprentice/service/apprentice-stats/apprentice-courses.service';

@Controller('apprentice/apprentice-stats')
export class ApprenticeStatsController {
  constructor(private readonly service: ApprenticeStatsService) {}

  @Post('/create')
  create(@Body() apprenticeCourses: ApprenticeStats) {
    return this.service.create(apprenticeCourses);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() apprenticeCourses: ApprenticeStats,
  ) {
    return this.service.update(id, apprenticeCourses);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
