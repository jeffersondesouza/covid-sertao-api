import Just from '../Just';
import Maybe from '../Maybe';

/* Always must have a value */
describe('Just', () => {
  it('should a null Maybe have isNothing=true because cound not returns the internal Just', () => {
    const isNothing = Maybe.of().isNothing();
    expect(isNothing).toBe(true);
  });

  it('should a Maybe have isNothing=false because it returns a internal Just', () => {
    const isNothing = Maybe.of(10).isNothing();
    expect(isNothing).toBe(false);
  });

  it('should return false to isNothing', () => {
    const isNothing = new Just().isNothing();
    expect(isNothing).toBe(false);
  });

  it('should return the Just value', () => {
    const instance = Just.of(10).get();
    expect(instance).toBe(10);
  });

  it('should return the Just default value to get', () => {
    const instance = Just.of(null).get(10);
    expect(instance).toBe(10);
  });

  it('should return the Just mapped value to get', () => {
    const instance = Just.of(10)
      .map(v => v * 2)
      .map(v => v * 2)
      .get();
    expect(instance).toBe(40);
  });
});
