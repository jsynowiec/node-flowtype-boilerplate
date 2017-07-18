import Encounters from '../src/domain/command-handlers/encounters';

describe('The command-handler example, Encounters', () => {
  const db = [
    { id: 1, userId: 'abc' },
    { id: 2, userId: 'abc' },
    { id: 3, userId: 'xyz' },
  ];
  const encounters = new Encounters(db);

  describe('when getting one encounter', () => {
    it('should return all encounters for the user', async () => {
      const match = await encounters.getOneEncounter({ id: 2 });
      expect(match).toEqual(db.filter((e) => e.id === 2));
    });
  });

  describe('when getting a list of encounters', () => {
    it('should return all encounters for the user', async () => {
      const matches = await encounters.getAllEncounters({ userId: 'abc' });
      expect(matches).toEqual(db.filter((e) => e.userId === 'abc'));
    });
  });

  describe('when creating an encounter', () => {
    it('should add the encounter to the database', async () => {
      const toCreate = { name: 'Mickey Mouse' };
      const created = await encounters.createEncounter(toCreate);
      expect(db).toContain(created);
    });
  });

  describe('when removing an encounter', () => {
    it('should remove the encounter to the database', async () => {
      const toRemove = { id: 999, name: 'Remove Me' };
      db.push(toRemove);
      await encounters.removeEncounter({ id: 999 });
      expect(db).not.toContain(toRemove);
    });
  });

  describe('when modifying an encounter', () => {
    it('should change the encounter to the database', async () => {
      const toMod = { id: 111, name: 'Change Me' };
      db.push(toMod);
      await encounters.modifyEncounter({
        id: toMod.id,
        modify: { name: 'changed' },
      });
      const expected = { id: 111, name: 'changed' };
      expect(db.find((i) => i.id === toMod.id)).toEqual(expected);
    });
  });
});
