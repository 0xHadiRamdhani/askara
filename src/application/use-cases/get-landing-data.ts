import { IDataRepository } from '../../domain/repositories/data-repository';
import { ValueItem, ServiceItem, SolutionItem, ApproachItem } from '../../domain/entities/types';

export class GetLandingDataUseCase {
  constructor(private readonly dataRepository: IDataRepository) {}

  async execute(): Promise<{
    coreValues: ValueItem[];
    services: ServiceItem[];
    industrySolutions: SolutionItem[];
    approaches: ApproachItem[];
  }> {
    const [coreValues, services, industrySolutions, approaches] = await Promise.all([
      this.dataRepository.getCoreValues(),
      this.dataRepository.getServices(),
      this.dataRepository.getIndustrySolutions(),
      this.dataRepository.getApproaches(),
    ]);

    return {
      coreValues,
      services,
      industrySolutions,
      approaches,
    };
  }
}
