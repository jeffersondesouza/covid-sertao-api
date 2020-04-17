import Functor from '../Functor';

describe('Functor', () => {
  it('should return the Functor value', () => {
    const instance = Functor.of(10).get();
    expect(instance).toBe(10);
  });

  it('should return the Functor default value to get', () => {
    const instance = Functor.of(null).get(10);
    expect(instance).toBe(10);
  });

  it('should return the Functor mapped value to get', () => {
    const instance = Functor.of(10)
      .map(v => v * 2)
      .map(v => v * 2)
      .get();
    expect(instance).toBe(40);
  });
});
