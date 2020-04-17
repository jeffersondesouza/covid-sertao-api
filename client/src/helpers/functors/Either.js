import Monad from './Monad';
import Left from './Left';
import Right from './Right';

/* 
We can put a computation in the Either, 
and make it a Left in case of errors, 
or a Right containing a result in case of success. 
 */

class Either extends Monad {
  constructor(left, right) {
    return right === undefined || right === null
      ? new Left(left)
      : new Right(right);
  }
  static of(left, right) {
    return new Either(left, right);
  }
}

export default Either;
