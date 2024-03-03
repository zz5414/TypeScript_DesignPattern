import Item from "./Item";
import Iterator from "./Iterator";
import { LinkedList, ListNode } from "./LinkedList";

class LinkedListIterator implements Iterator<Item> {
  private node: ListNode | null;
  constructor(private array: LinkedList) {
    this.node = null;
  }

  next(): boolean {
    // 가장 처음 호출하는 경우
    if (this.node === null) {
      this.node = this.array.firstNode;
    } else {
      this.node = this.node.next;
    }

    return this.node !== null;
  }
  current(): Item {
    return this.node.value;
  }
}

export default LinkedListIterator;
