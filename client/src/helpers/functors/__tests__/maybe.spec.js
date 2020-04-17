import Maybe from '../Maybe';

describe('Maybe', () => {
  describe('When initial value is null', () => {
    describe('when call the get function', () => {
      it('should return  the Maybe value: null', () => {
        const instance = Maybe.of(null).get(10);
        expect(instance).toBe(10);
      });

      it('should return  the Maybe value: undefined', () => {
        const instance = Maybe.of(undefined).get(10);
        expect(instance).toBe(10);
      });
    });

    describe('when call the get function', () => {
      it('should return  the Maybe value', () => {
        const obj = undefined;
        const instance = Maybe.of(obj)
          .map(v => v.id)
          .get(10);
        expect(instance).toBe(10);
      });
    });
  });

  describe('When initial value is NOT null', () => {
    describe('when call the get function', () => {
      it('should return the Maybe mapped', () => {
        const obj = {
          param1: {
            param2: 1,
          },
        };

        const instance = Maybe.of(obj);
        expect(
          instance
            .map(inst => inst.param1)
            .map(param1 => param1.param2)
            .get(0)
        ).toBe(1);
      });
    });

    describe('when call the get function', () => {
      it('should return  the Maybe value', () => {
        const obj = undefined;
        const instance = Maybe.of(obj)
          .map(v => v.id)
          .get(10);
        expect(instance).toBe(10);
      });
    });
  });
});
