import { Metric } from '../interfaces/metric.interface';
import { Repository } from '../interfaces/repository.interface';


const notRepositoryCoverage = (repositories: Repository[], metrics: Metric[]) => {
  const repositoryWithCoverage = repositories.map(repository => {
    return metrics.filter(metric => metric.id_repository === repository.id_repository && metric.coverage < 75)[0]
  })

  if (repositoryWithCoverage.length === 0) return true
  return false
}

export {
  notRepositoryCoverage
}