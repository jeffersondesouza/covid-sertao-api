import Container from '../Container';

describe('Container', () => {
  describe('when iniciate a container', () => {
    const value = 10;
    const instance = Container.of(value);

    it('should be an isntace of Container', () => {
      expect(typeof instance).toBe('object');
    });

    it('should have a the  valueOf of the constructor', () => {
      expect(instance.valueOf()).toBe(value);
    });

    it('should return the string value of the container in toString', () => {
      expect(instance.toString()).toBe(`Container(${value})`);
    });

    describe('when call get function', () => {
      it('should return Container value', () => {
        const double = instance.get();
        expect(double).toBe(value);
      });

      describe('when create a COntainer wih no value params', () => {
        it('should return undefined when get dont receive defaultValue', () => {
          const instance2 = Container.of();
          expect(instance2.get()).toBe(undefined);
        });
        it('should return a defaultValue to get when nothing is informed on constructor', () => {
          const instance2 = Container.of();
          expect(instance2.get(100)).toBe(100);
        });

        it('should return a defaultValue to get when nothing is informed on constructor', () => {
          const instance2 = Container.of(0);
          expect(instance2.get(100)).toBe(0);
        });
      });
    });

    describe('when call map function', () => {
      it('should change the constructor value according map function', () => {
        const double = instance.map(v => v * 2);
        expect(double).toBe(value * 2);
      });
    });
  });
});
