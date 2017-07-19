import type Encounter from '../types/encounter';

export default class Encounters {
  constructor(db: Array<Encounter>) {
    this.db = db;
  }

  getAllEncounters({ userId }): Array<Encounter> {
    return this.db.filter((i) => i.userId === userId);
  }

  getOneEncounter({ id }): Encounter {
    return this.db.filter((w) => w.id === id);
  }

  removeEncounter({ id }) {
    this.db.filter((w) => w.id === id)
      .forEach((w) => {
        this.db.splice(this.db.indexOf(w));
      });
  }

  createEncounter({ name, bloodType }): Encounter {
    const newEncounter = { id: this.db.length + 1, name, bloodType };
    this.db.push(newEncounter);
    return newEncounter;
  }

  modifyEncounter({ id, modify }) {
    this.db = this.db
      .filter((w) => w.id === id)
      .map((w) => {
        const current = w;
        Object.keys(modify).forEach((key) => {
          current[key] = modify[key];
        });
        return current;
      });
  }
}
