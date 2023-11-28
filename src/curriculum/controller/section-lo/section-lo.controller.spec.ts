import { Test, TestingModule } from '@nestjs/testing';
import { SectionLoController } from './section-lo.controller';

describe('SectionLoController', () => {
  let controller: SectionLoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionLoController],
    }).compile();

    controller = module.get<SectionLoController>(SectionLoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
