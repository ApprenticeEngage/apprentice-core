import { Test, TestingModule } from '@nestjs/testing';
import { ApprenticeCertService } from './apprentice-cert.service';

describe('ApprenticeCertService', () => {
  let service: ApprenticeCertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApprenticeCertService],
    }).compile();

    service = module.get<ApprenticeCertService>(ApprenticeCertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
