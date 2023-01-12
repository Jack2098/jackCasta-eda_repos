import { StateRepository } from '../utils/enum'

const verficationInformationService = async (id: number) => {
  try {
    const response = await fetch('http://localhost:5000/');
    let label = ''
    const verification = await response.json();
    const { repositories } = verification;
    const fiteredVerifcation = repositories.find((repo:{id: number, state: number}) => repo.id === id);
    if (fiteredVerifcation !== undefined) {
      switch(fiteredVerifcation.state) {
        case 604:
          label = StateRepository.Aprobado
          break
        case 605:
          label = StateRepository.Espera
          break
        case 606:
          label = StateRepository.Verificado
          break
      }
    }
    return label;
  } catch (e) {
    return 'Error fetching';
  }
};

export {
  verficationInformationService
}