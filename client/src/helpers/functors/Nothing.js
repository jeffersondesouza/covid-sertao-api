import Functor from './Functor';

class Nothing extends Functor {
  isNothing() {
    return true;
  }
  toString() {
    return 'Nothing()';
  }
  map() {
    return this;
  }
  /*  orElse(v) {
    return this.isNothing() ? v : this.valueOf();
  } */
}

export default Nothing;
