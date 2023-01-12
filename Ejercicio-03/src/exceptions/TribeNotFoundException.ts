export class TribeNotFoundException extends Error {
  constructor () {
    super('La Tribu no se encuentra registrada');
  }
}