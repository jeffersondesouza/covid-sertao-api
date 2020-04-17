import VALUE from './VALUE';

const isNill = value => !value && value !== 0;

class Container {
  constructor(x) {
    this[VALUE] = x;
  }

  static of(x) {
    return new Container(x);
  }

  map(fn) {
    return fn(this[VALUE]);
  }

  toString() {
    return `${this.constructor.name}(${this[VALUE]})`;
  }

  valueOf() {
    return this[VALUE];
  }

  get(defaultValue) {
    return isNill(this[VALUE]) ? defaultValue : this[VALUE];
  }
}

export default Container;
