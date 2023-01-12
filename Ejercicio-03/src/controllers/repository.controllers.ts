import { Request, Response } from "express"
import { getFilterMetricsService } from "../services/getFilterMetrics.service";
import { TribeNotFoundException } from "../exceptions/TribeNotFoundException";
import { nonExistentTribeService } from "../services/nonexistentTribe.service";
import { verficationInformationService } from "../services/verificationInformation.service";
import { notRepositoryCoverage } from "../services/notRepositoryCoverage.service";
import { TribeNotHaveRepositories } from '../exceptions/TribeNotHaveRepositoriesException';
import { mapperExtrucRepositoriesService } from "../services/mapperExtrucRepositories.service";
import { metricsMock, repositoriesMock } from "../mock";

const getRepositoryCtrl = async ({ params }: Request, res: Response) => {
  try {
    const id_tribe = Number(params.id);
    
    if (nonExistentTribeService(id_tribe)) throw new TribeNotFoundException();

    
    const repositoriesResponse = repositoriesMock.filter(repository => repository.id_tribe === id_tribe);

    if (notRepositoryCoverage(repositoriesResponse, metricsMock)) throw new TribeNotHaveRepositories();

    const filteredMetrics = getFilterMetricsService(repositoriesResponse, metricsMock);

    const mapperRepositories = await mapperExtrucRepositoriesService(repositoriesResponse, filteredMetrics);

    res.json({repositories: mapperRepositories});
  } catch (e) {
    res.status(404)
      .json({message: `${e}`})
  }
}

export {
  getRepositoryCtrl
}