import { Injectable } from '@nestjs/common';
import { Courses } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CourseService {
  constructor(private readonly dataBase: DatabaseService) {}

  //this privilege only resides with the mentor ; so setup auth as such
  async create(courseObj: Courses) {
    return this.dataBase.courses.create({ data: courseObj });
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(courseId: number) {
    console.log(typeof courseId);
    return this.dataBase.courses.findFirst({
      where: {
        course_id: courseId,
      },
    });
  }

  //   update(id: number, updateProductDto: UpdateProductDto) {
  //     return `This action updates a #${id} product`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} product`;
  //   }
}
