import { tribeMock } from "../mock"

const nonExistentTribeService = (id: number) => {
  const tribeResponse = tribeMock.filter(t => t.id_tribe === id);

  if (tribeResponse.length === 0) return true

  return false
}

export {
  nonExistentTribeService
}