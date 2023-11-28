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
import { ApprenticeCourses } from '@prisma/client';
import { ApprenticeCoursesService } from 'src/apprentice/service/apprentice-courses/apprentice-courses.service';

@Controller('apprentice-courses')
export class ApprenticeCoursesController {
  constructor(private readonly service: ApprenticeCoursesService) {}

  @Post('/create')
  create(@Body() apprenticeCourses: ApprenticeCourses) {
    return this.service.create(apprenticeCourses);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  //updating a skill
  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() apprenticeCourses: ApprenticeCourses,
  ) {
    return this.service.update(id, apprenticeCourses);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
