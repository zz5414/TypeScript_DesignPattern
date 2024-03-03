import Item from "./Item";
import Iterator from "./Iterator";
import ReverseArray from "./ReverseArray";

class ReverseArrayIterator implements Iterator<Item> {
  private index: number;
  constructor(private array: ReverseArray) {
    this.array = array;
    this.index = array.count;
  }

  next(): boolean {
    this.index--;
    return this.index >= 0;
  }

  current(): Item {
    return this.array.getItem(this.index);
  }
}

export default ReverseArrayIterator;
