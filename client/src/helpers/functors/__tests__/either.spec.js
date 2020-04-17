import Either from '../Either';

/* 
We can put a computation in the Either, 
and make it a Left in case of errors, 
or a Right containing a result in case of success. 
 */

describe('Either', () => {
  it('should return the Right arg', () => {
    const instance = Either.of('left', 10).map(v => v * 10);

    expect(instance.get()).toBe(100);
  });

  it('should return the left arg', () => {
    const instance = Either.of(10).map(v => v * 10);
    expect(instance.get()).toBe(10);
  });

  it('should return the tight mapped arg and NOT be a isLeft way return', () => {
    const obj = {
      value: 10,
    };
    const instance = Either.of('No Value', obj).map(item => item.value);
    expect(instance.get()).toBe(10);
    expect(instance.isLeft()).toBe(false);
  });

  it('should return the left arg because the right is null and be a isLeft way return', () => {
    const OBJ = {
      value: 10,
    };
    const instance = Either.of('No Value', OBJ.data);

    expect(instance.isLeft()).toBe(true);
    expect(instance.get()).toBe('No Value');
  });
});
