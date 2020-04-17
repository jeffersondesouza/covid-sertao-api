import VALUE from './VALUE';
import Functor from './Functor';
import Container from './Container';

class Monad extends Functor {
  static of(x) {
    return new Monad(x);
  }
  map(fn) {
    return Monad.of(fn(this[VALUE]));
  }
  unwrap() {
    const myValue = this[VALUE];
    return myValue instanceof Container ? myValue.unwrap() : this;
  }
  chain(fn) {
    return this.map(fn).unwrap();
  }
  /*   ap(m) {
    return m.map(this.valueOf());
  } */
}

export default Monad;
