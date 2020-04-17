import VALUE from './VALUE';
import Functor from './Functor';
import Maybe from './Maybe';

class Just extends Functor {
  isNothing() {
    return false;
  }
  map(fn) {
    return Maybe.of(fn(this[VALUE]));
  }
}

export default Just;
