import { Metric } from "../interfaces/metric.interface"
import { Organization } from "../interfaces/organization.interface"
import { Repository } from "../interfaces/repository.interface"
import { Tribe } from "../interfaces/tribe.interface"

const tribeMock: Tribe[] = [
  {
    id_tribe: 1,
    id_organization: 1,
    name: 'Centro Digital',
    status: 1
  },
]

const organizationMock: Organization[] = [
  {
    id_organization: 1,
    name: 'Banco Pichincha',
    status: 1
  },
]

const repositoriesMock: Repository[] = [
  {
    id_repository: 1,
    id_tribe: 1,
    name: 'cd-common-utils',
    state: 'E',
    create_time: new Date(),
    status: 'A'
  },
  {
    id_repository: 2,
    id_tribe: 1,
    name: 'cd-common-text"',
    state: 'A',
    create_time: new Date(),
    status: 'A'
  }
]

const metricsMock: Metric[] = [
  {
    id_repository: 1,
    coverage: 85,
    bugs: 0,
    vulnerabilities: 0,
    hotspot: 0,
    code_smells: 0,
  },
  {
    id_repository: 2,
    coverage: 75,
    bugs: 0,
    vulnerabilities: 2,
    hotspot: 0,
    code_smells: 1,
  }
]

export {
  tribeMock,
  organizationMock,
  repositoriesMock,
  metricsMock
}