import { Controller, Get, Param } from '@nestjs/common';
import { UUID } from 'crypto';

@Controller('controller')
export class ControllerController {
  //for main course page
  @Get('/main/:courseId')
  getCourseContent(@Param('courseId') courseId: UUID) {
    
  }
}
