import { Injectable } from '@nestjs/common';
import { Mentor } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MentorService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(mentor: Mentor) {
    return this.dataBase.mentor.create({ data: mentor });
  }

  findOne(id: number) {
    return this.dataBase.mentor.findMany({
      where: {
        mentor_id: id,
      },
    });
  }

  update(id: number, mentor: Mentor) {
    return this.dataBase.mentor.update({
      where: {
        mentor_id: id,
      },
      data: mentor,
    });
  }

  remove(id: number) {
    return this.dataBase.mentor.delete({
      where: {
        mentor_id: id,
      },
    });
  }
}
