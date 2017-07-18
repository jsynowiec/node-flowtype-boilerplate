import Encounters from '../src/domain/command-handlers/encounters';

describe('The command-handler example, Encounters', () => {
  const db = [{ id: 1, userId: 'abc' }, { id: 2, userId: 'abc' }, { id: 3, userId: 'xyz' }];
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
});
