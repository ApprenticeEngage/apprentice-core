import { Controller, Get, Param } from '@nestjs/common';

@Controller('controller')
export class ControllerController {
  //for main course page
  @Get('/main/:courseId')
  getCourseContent(@Param('courseId') courseId: string) {}
}
