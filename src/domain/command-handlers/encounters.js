export default class Encounters {
  constructor(db) {
    this.db = db;
  }

  getAllEncounters({ userId }): Array<any> {
    return this.db.filter((i) => i.userId === userId);
  }

  getOneEncounter(cmd): any {
    return this.db.filter((w) => w.id === cmd.id);
  }

  removeEncounter(cmd) {
    this.db.filter((w) => w.id === cmd.id)
      .forEach((w) => {
        this.db.splice(this.db.indexOf(w));
      });
  }

  createEncounter(cmd) {
    const newEncounter = { id: this.db.length + 1, name: cmd.name, size: cmd.size };
    this.db.push(newEncounter);
    return newEncounter;
  }

  modifyEncounter(cmd) {
    this.db = this.db
      .filter((w) => w.id === cmd.id)
      .map((w) => {
        const current = w;
        Object.keys(cmd.modify).forEach((key) => {
          current[key] = cmd.modify[key];
        });
        return current;
      });
  }
}
