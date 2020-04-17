import Functor from './Functor';
import Nothing from './Nothing';
import Just from './Just';

class Maybe extends Functor {
  constructor(x) {
    return x === undefined || x === null ? new Nothing() : new Just(x);
  }
  static of(x) {
    return new Maybe(x);
  }
}

export default Maybe;
