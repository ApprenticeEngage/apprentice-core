import { Injectable } from '@nestjs/common';
import { Enrollments } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EnrollmentsService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(enrollment: Enrollments) {
    return this.dataBase.enrollments.create({ data: enrollment });
  }

  findOne(courseId: number, apprenticeId: number) {
    return this.dataBase.enrollments.findFirst({
      where: {
        apprentice_id: apprenticeId,
        course_id: courseId,
      },
    });
  }

  update(courseId: number, apprenticeId: number, enrollment: Enrollments) {
    return this.dataBase.enrollments.update({
      where: {
        course_id_apprentice_id: {
          apprentice_id: apprenticeId,
          course_id: courseId,
        },
      },
      data: enrollment,
    });
  }

  remove(courseId: number, apprenticeId: number) {
    return this.dataBase.enrollments.delete({
      where: {
        course_id_apprentice_id: {
          apprentice_id: apprenticeId,
          course_id: courseId,
        },
      },
    });
  }
}
