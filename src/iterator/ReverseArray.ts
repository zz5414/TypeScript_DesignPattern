import Aggregator from "./Aggregator";
import Item from "./Item";
import Iterator from "./Iterator";
import ReverseArrayIterator from "./ReverseArrayIterator";

class ReverseArray implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }

  iterator(): Iterator<Item> {
    return new ReverseArrayIterator(this);
  }
}

export default ReverseArray;
