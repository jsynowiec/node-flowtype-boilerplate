import Encounters from '../src/data/repositories/encounters';
import EncountersFake from '../src/data/repositories/encounters.fake';

describe('Both the real and fake encountersRepositories', () => {
  const model = {};
  const real = new Encounters(model);
  const fake = new EncountersFake();
  const suts = [real, fake];

  describe('when getting one encounter by id', () => {
    it('should return the correct encounter', () => {
      suts.forEach(async (s) => {
        const match = await s.getById(1);
        expect(match.id).toEqual(1);
      });
    });
  });
});
