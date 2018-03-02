import type Encounter from '../../domain/types/encounter';

export default class Encounters {

  constructor() {
    this.encounters = [
      { id: 1, patientId: 567, reason: 'Broken leg' },
      { id: 2, patientId: 567, reason: 'Headache' },
      { id: 3, patientId: 567, reason: 'Stomach pain' },
      { id: 4, patientId: 345, reason: 'Mental instability' },
    ];
  }
  getAll(): Promise<Array<Encounter>> {
    return Promise.resolve(this.encounters);
  }

  getById(id: number): Promise<Encounter> {
    return Promise.resolve(this.encounters.find(id));
  }

  create(encounter: Encounter): Promise<Encounter> {
    this.encounters.push(encounter);
    return Promise.resolve(encounter);
  }

  update(id: number, encounter: Encounter): Promise<Encounter> {
    this.encounters = this.encounters.map((e) => {
      if (e.id === id) {
        return encounter;
      }
      return e;
    });
    return Promise.resolve(encounter);
  }

  delete(id: number): Promise<number> {
    this.encounters = this.encounters.filter((e) => {
      if (e.id === id) {
        return false;
      }
      return true;
    });
    return Promise.resolve(id);
  }
}
