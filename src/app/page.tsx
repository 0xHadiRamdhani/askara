import { Container } from '../infrastructure/di/container';
import LandingPageClient from '../presentation/components/LandingPageClient';

export default async function Page() {
  const container = Container.getInstance();
  const data = await container.getLandingDataUseCase.execute();

  return (
    <LandingPageClient
      coreValues={data.coreValues}
      services={data.services}
      industrySolutions={data.industrySolutions}
      approaches={data.approaches}
    />
  );
}