import { Injectable } from '@nestjs/common';
import { ApprenticeCourses } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ApprenticeCoursesService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(apprenticeCourses: ApprenticeCourses) {
    return this.dataBase.apprenticeCourses.create({ data: apprenticeCourses });
  }

  findOne(id: number) {
    return this.dataBase.apprenticeCourses.findFirst({
      where: {
        apprentice_id: id,
      },
    });
  }

  update(id: number, apprenticeCourses: ApprenticeCourses) {
    return this.dataBase.apprenticeCourses.update({
      where: {
        course_id_apprentice_id: {
            
        }
      },
      data: apprenticeCourses,
    });
  }

  remove(id: number) {
    return this.dataBase.apprenticeCourses.delete({
      where: {
        apprentice_id: id,
      },
    });
  }
}
