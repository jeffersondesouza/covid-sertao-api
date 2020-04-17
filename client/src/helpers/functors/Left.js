import Monad from './Monad';

class Left extends Monad {
  isLeft() {
    return true;
  }
  map() {
    return this;
  }
}

export default Left;
