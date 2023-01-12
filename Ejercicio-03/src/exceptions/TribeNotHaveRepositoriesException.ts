
export class TribeNotHaveRepositories extends Error {
  constructor () {
    super('La Tribu no tiene repositorios que cumplan con la cobertura necesaria');
  }
}