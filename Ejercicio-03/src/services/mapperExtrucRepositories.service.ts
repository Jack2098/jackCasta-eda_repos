import { Metric } from "../interfaces/metric.interface";
import { Repository } from "../interfaces/repository.interface";
import { RepositoryDto } from '../interfaces/repositoryDto';
import { organizationMock, tribeMock } from "../mock";
import { verficationInformationService } from "./verificationInformation.service";

const mapperExtrucRepositoriesService = async (repositories: Repository[], metrics: Metric[]) => {
  const repositoryDto: RepositoryDto[] = []
  await metrics.map(async(metric) => {
    // const labelVerification = await verficationInformationService(metric.id_repository);
    const repo = repositories.find(repository => repository.id_repository === metric.id_repository);
    if (repo !== undefined) {
      const tribe = tribeMock.find(tribeM => tribeM.id_tribe === repo.id_tribe)
      if (tribe !== undefined) {
        const organization = organizationMock.find(o => o.id_organization === tribe.id_organization);
        if (organization !== undefined) {
          repositoryDto.push({
            id: metric.id_repository,
            name: repo.name,
            tribe: 'tribe.name',
            organization: 'organization.name',
            coverage: `${metric.coverage}%`,
            codeSmells: metric.code_smells,
            bugs: metric.bugs,
            vulnerabilities: metric.vulnerabilities,
            hotspot: metric.hotspot,
            verificationState: '',
            state: repo.state
          })
        }
      }
    }
  });
  return repositoryDto;
}

export {
  mapperExtrucRepositoriesService
}