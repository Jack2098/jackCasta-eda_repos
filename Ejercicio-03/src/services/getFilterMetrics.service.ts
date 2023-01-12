import { Metric } from "../interfaces/metric.interface";
import { Repository } from "../interfaces/repository.interface";
import { State } from "../utils/enum";

const getFilterMetricsService = (repositories: Repository[], metrics: Metric[]) => {
  const filteredRepositories = repositories
    .filter(repository => repository.create_time.getFullYear === new Date().getFullYear && repository.state === State.E)

  const metricsResponse = filteredRepositories.map(repository => {
    return metrics.filter(metric => metric.id_repository === repository.id_repository)[0]
  })

  const filteredMetrics = metricsResponse.filter(metric => metric.coverage >= 75)
  return filteredMetrics;
}

export {
  getFilterMetricsService,

}