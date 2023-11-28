import { Injectable } from '@nestjs/common';
import { Test } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TestService {
  constructor(private readonly dataBase: DatabaseService) {}

  //the where clause should intake curr_id_section_id ; theres an err
  async findAll(currId: number, secId: number) {
    return this.dataBase.test.findMany({
      where: {
        curr_id: currId,
        section_id: secId,
      },
    });
  }

  //the where clause should intake curr_id_section_id ; theres an err
  async findOne(currId: number, secId: number, test: number) {
    return this.dataBase.test.findFirst({
      where: {
        curr_id: currId,
        section_id: secId,
        test_id: test,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(test: Test) {
    return this.dataBase.test.create({ data: test });
  }

  async remove(secId: number, currId: number, test: number) {
    try {
      return await this.dataBase.test.delete({
        where: {
          curr_id_section_id_test_id: {
            section_id: secId,
            curr_id: currId,
            test_id: test,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove secId: ${error.message}`);
    }
  }

  async update(secId: number, currId: number, testId: number, test: Test) {
    return this.dataBase.test.update({
      where: {
        curr_id_section_id_test_id: {
          section_id: secId,
          curr_id: currId,
          test_id: testId,
        },
      },
      data: test,
    });
  }
}
