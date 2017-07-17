"use strict";

export class Encounters {
  constructor(db) {
    this.db = db;
  }

  getAllEncounters(cmd) {
    return this.db;
  }

  getOneEncounter(cmd) {
    return this.db.filter(w => w.id === cmd.id);
  }

  removeEncounter(cmd) {
    this.db = this.db.filter(w => w.id !== cmd.id);
  }

  createEncounter(cmd) {
    this.db.push({ id: encounters.length + 1, name: cmd.name, size: cmd.size });
  }

  modifyEncounter(cmd) {
    this.db = this.db.map(w => {
      if (w.id === cmd.id) {
        w.size = cmd.size;
      }
      return w;
    });
  }
}
