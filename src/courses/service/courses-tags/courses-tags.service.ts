import { Injectable } from '@nestjs/common';
import { CourseTag } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoursesTagsService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this
  async findAll(courseId: number) {
    return this.dataBase.courseTag.findMany({
      where: {
        course_id: courseId,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(courseTag: CourseTag) {
    return this.dataBase.courseTag.create({ data: courseTag });
  }

  async remove(courseId: number, serialNo: number) {
    try {
      return await this.dataBase.courseTag.delete({
        where: {
          course_id_serialNo: {
            course_id: courseId,
            serialNo: serialNo,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove courseTag: ${error.message}`);
    }
  }

  async update(courseId: number, serialNo: number, courseTag: CourseTag) {
    return this.dataBase.courseTag.update({
      where: {
        course_id_serialNo: {
          course_id: courseId,
          serialNo: serialNo,
        },
      },
      data: courseTag,
    });
  }
}
