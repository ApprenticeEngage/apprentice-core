import { Injectable } from '@nestjs/common';
import { Apprentice } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ApprenticeService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(apprentice: Apprentice) {
    return this.dataBase.apprentice.create({ data: apprentice });
  }

  findOne(id: number) {
    return this.dataBase.apprentice.findFirst({
      where: {
        apprentice_id: id,
      },
    });
  }

  update(id: number, apprentice: Apprentice) {
    return this.dataBase.apprentice.update({
      where: {
        apprentice_id: id,
      },
      data: apprentice,
    });
  }

  remove(id: number) {
    return this.dataBase.apprentice.delete({
      where: {
        apprentice_id: id,
      },
    });
  }
}
