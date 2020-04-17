import Nothing from '../Nothing';

describe('Nothing', () => {
  it('should return the Nothing to String', () => {
    const instance = new Nothing();
    expect(instance.isNothing()).toBe(true);
  });

  it('should return the Nothing default value to get', () => {
    const instance = Nothing.of(10).map(v => v * 10);
    expect(instance.get()).toBe(100);
  });

  it('should return the Nothing mapped value to get', () => {
    const instance = new Nothing(10).toString();
    expect(instance).toBe('Nothing()');
  });
});
