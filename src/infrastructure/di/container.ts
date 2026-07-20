import { MockDataRepository } from '../repositories/mock-data-repository';
import { GetLandingDataUseCase } from '../../application/use-cases/get-landing-data';
import { IDataRepository } from '../../domain/repositories/data-repository';

export class Container {
  private static instance: Container;

  private dataRepository: IDataRepository;
  public getLandingDataUseCase: GetLandingDataUseCase;

  private constructor() {
    this.dataRepository = new MockDataRepository();
    this.getLandingDataUseCase = new GetLandingDataUseCase(this.dataRepository);
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }
}
