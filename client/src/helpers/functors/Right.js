import VALUE from './VALUE';
import Monad from './Monad';
import Either from './Either';

class Right extends Monad {
  isLeft() {
    return false;
  }
  map(fn) {
    return Either.of(null, fn(this[VALUE]));
  }
}

export default Right;
