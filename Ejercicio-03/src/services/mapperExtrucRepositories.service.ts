import { Metric } from "../interfaces/metric.interface";
import { Repository } from "../interfaces/repository.interface";
import { RepositoryDto } from '../interfaces/repositoryDto';
import { organizationMock, tribeMock } from "../mock";
import { verficationInformationService } from "./verificationInformation.service";

const mapperExtrucRepositoriesService = async (repositories: Repository[], metrics: Metric[]) => {
  const repositoryDto: RepositoryDto[] = []

  for (const i in metrics) {
    const labelVerification = await verficationInformationService(metrics[i].id_repository);
    const reposi = repositories.filter(repo => repo.id_repository === metrics[i].id_repository)[0];
    const tribe = tribeMock.filter(tribeM => tribeM.id_tribe === reposi.id_tribe)[0];
    const organization = organizationMock.filter(o => o.id_organization === tribe.id_organization)[0];
    repositoryDto.push({
      id: metrics[i].id_repository,
      name: reposi.name,
      tribe: tribe.name,
      organization: organization.name,
      coverage: `${metrics[i].coverage}%`,
      codeSmells: metrics[i].code_smells,
      bugs: metrics[i].bugs,
      vulnerabilities: metrics[i].vulnerabilities,
      hotspot: metrics[i].hotspot,
      verificationState: labelVerification,
      state: getState(reposi.state)
    });
  }

  return repositoryDto;
}

const getState = (state: string) => {

  let stateRepo = ''

   switch(state) {
    case 'E':
      stateRepo = 'Habilitado'
    case 'D':
      stateRepo = 'Deshabilitado'
    case 'A':
      stateRepo = 'Archivado'
  }

  return stateRepo;
}

export {
  mapperExtrucRepositoriesService
}