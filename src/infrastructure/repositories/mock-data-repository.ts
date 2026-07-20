import { IDataRepository } from '../../domain/repositories/data-repository';
import { ValueItem, ServiceItem, SolutionItem, ApproachItem } from '../../domain/entities/types';
import { coreValues, services, industrySolutions, approaches } from '../data/mock-data';

export class MockDataRepository implements IDataRepository {
  async getCoreValues(): Promise<ValueItem[]> {
    return coreValues;
  }

  async getServices(): Promise<ServiceItem[]> {
    return services;
  }

  async getIndustrySolutions(): Promise<SolutionItem[]> {
    return industrySolutions;
  }

  async getApproaches(): Promise<ApproachItem[]> {
    return approaches;
  }
}
