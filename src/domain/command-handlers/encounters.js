import type Encounter from '../types/encounter';

export default class Encounters {
  constructor({ encountersRepository }) {
    this.repository = encountersRepository;
  }

  getAllEncounters(): Array<Encounter> {
    return this.repository.getAll();
  }

  getOneEncounter({ id }): Encounter {
    return this.repository.getById(id);
  }

  removeEncounter({ id }) {
    this.repository.delete(id);
  }

  createEncounter(encounter): Encounter {
    return this.repository.create(encounter);
  }

  modifyEncounter({ id, modify }): Promise<Encounter> {
    return this.repository.update(id, modify);
  }
}
