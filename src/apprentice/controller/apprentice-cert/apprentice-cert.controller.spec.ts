import { Test, TestingModule } from '@nestjs/testing';
import { ApprenticeCertController } from './apprentice-cert.controller';

describe('ApprenticeCertController', () => {
  let controller: ApprenticeCertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprenticeCertController],
    }).compile();

    controller = module.get<ApprenticeCertController>(ApprenticeCertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
