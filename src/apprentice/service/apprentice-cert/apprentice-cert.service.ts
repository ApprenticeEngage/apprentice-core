import { Injectable } from '@nestjs/common';
import { ApprenticeCert } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ApprenticeCertService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(apprenticeCert: ApprenticeCert) {
    return this.dataBase.apprenticeCert.create({ data: apprenticeCert });
  }

  findOne(id: number) {
    return this.dataBase.apprenticeCert.findFirst({
      where: {
        apprentice_id: id,
      },
    });
  }

  update(id: number, apprenticeCert: ApprenticeCert) {
    return this.dataBase.apprenticeCert.update({
      where: {
        //updating via the actual ID
        id: id,
      },
      data: apprenticeCert,
    });
  }

  remove(id: number) {
    return this.dataBase.apprenticeStats.delete({
      where: {
        apprentice_id: id,
      },
    });
  }
}
