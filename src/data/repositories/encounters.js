import type Encounter from '../../domain/types/encounter';

export default class Encounters {
  constructor({ encounterModel }) {
    this.model = encounterModel;
  }

  getAll(): Promise<Array<Encounter>> {
    return this.model.findAll({ order: ['id'] });
  }

  getById(id: number): Promise<Encounter> {
    return this.model.findById(id);
  }

  create(encounter: Encounter): Promise<Encounter> {
    return this.model.create(encounter);
  }

  update(id: number, encounter: Encounter): Promise<Encounter> {
    return this.model
      .update(encounter, {
        where: { id },
        returning: true,
        plain: true,
      })
      .then((result) => result && result[1])
      .catch(() => ({ error: 'Encounter not found' }));
  }

  delete(id: number): Promise<number> {
    return this.model.destroy({
      where: {
        id,
      },
    });
  }
}
