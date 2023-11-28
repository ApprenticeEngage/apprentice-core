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
import { ApprenticeCert } from '@prisma/client';
import { ApprenticeCertService } from 'src/apprentice/service/apprentice-cert/apprentice-cert.service';
@Controller('apprentice/apprentice-cert')
export class ApprenticeCertController {
  constructor(private readonly service: ApprenticeCertService) {}

  @Post('/create')
  create(@Body() apprenticeCert: ApprenticeCert) {
    return this.service.create(apprenticeCert);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  //the provided ID is the id of the entry ; which is a surrogate key
  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() apprenticeCert: ApprenticeCert,
  ) {
    return this.service.update(id, apprenticeCert);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
