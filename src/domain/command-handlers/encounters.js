

export default class Encounters {
  constructor(db) {
    this.db = db;
  }

  getAllEncounters(): Array<any> {
    return this.db;
  }

  getOneEncounter(cmd): any {
    return this.db.filter((w) => w.id === cmd.id);
  }

  removeEncounter(cmd) {
    this.db = this.db.filter((w) => w.id !== cmd.id);
  }

  createEncounter(cmd) {
    this.db.push({ id: this.db.length + 1, name: cmd.name, size: cmd.size });
  }

  modifyEncounter(cmd) {
    this.db = this.db.map((w) => {
      const current = w;
      if (current.id === cmd.id) {
        current.size = cmd.size;
      }
      return current;
    });
  }
}
