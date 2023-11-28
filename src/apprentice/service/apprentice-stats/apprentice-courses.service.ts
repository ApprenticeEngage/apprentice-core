import { Injectable } from '@nestjs/common';
import { ApprenticeStats } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ApprenticeStatsService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(apprenticeStats: ApprenticeStats) {
    return this.dataBase.apprenticeStats.create({ data: apprenticeStats });
  }

  findOne(id: number) {
    return this.dataBase.apprenticeStats.findFirst({
      where: {
        apprentice_id: id,
      },
    });
  }

  update(id: number, apprenticeStats: ApprenticeStats) {
    return this.dataBase.apprenticeStats.update({
      where: {
        apprentice_id: id,
      },
      data: apprenticeStats,
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
