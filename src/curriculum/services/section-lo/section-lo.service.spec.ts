import { Test, TestingModule } from '@nestjs/testing';
import { SectionLoService } from './section-lo.service';

describe('SectionLoService', () => {
  let service: SectionLoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionLoService],
    }).compile();

    service = module.get<SectionLoService>(SectionLoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
