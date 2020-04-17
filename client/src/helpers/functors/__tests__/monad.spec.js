import Monad from '../Monad';

describe('Monad', () => {
  describe('When iniciate a Monad', () => {
    describe('when call the get function', () => {
      it('should return  the monad value', () => {
        const param = 10;
        const instance = Monad.of(param);

        expect(instance.get()).toBe(param);
      });
    });

    describe('when call the MAP function', () => {
      it('should update the  monad value according map function', () => {
        const param = 10;
        const instance = Monad.of(param).map(v => v * 2);
        expect(instance.get()).toBe(param * 2);
      });

      it('should update the monad value according map sequence function', () => {
        const param = 10;
        const instance = Monad.of(param)
          .map(v => v * 2)
          .map(v => v * 2);
        expect(instance.get()).toBe(param * 4);
      });
    });

    describe('when call unwrap to and Container Children', () => {
      it('should unwrap the value of moand and return the constructor param', () => {
        const param = [1, 2, 3, 4];

        const instanceParam = Monad.of(param);

        const instance = Monad.of(instanceParam)
          .unwrap()
          .get();
        expect(instance).toBe(param);
      });

      it('should unwrap the value of moand and return the constructor param', () => {
        const param = [1, 2, 3, 4];
        const instance = Monad.of(param)
          .unwrap()
          .get();
        expect(instance).toBe(param);
      });
    });

    describe('when call CHAIN', () => {
      it('should map the monad value and then return the resut', () => {
        const param = 10;
        const instance = Monad.of(param)
          .chain(v => v * 2)
          .get();
        expect(instance).toBe(20);
      });
    });
  });
});
