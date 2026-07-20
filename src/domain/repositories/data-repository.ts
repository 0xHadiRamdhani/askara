import { ValueItem, ServiceItem, SolutionItem, ApproachItem } from '../entities/types';

export interface IDataRepository {
  getCoreValues(): Promise<ValueItem[]>;
  getServices(): Promise<ServiceItem[]>;
  getIndustrySolutions(): Promise<SolutionItem[]>;
  getApproaches(): Promise<ApproachItem[]>;
}
