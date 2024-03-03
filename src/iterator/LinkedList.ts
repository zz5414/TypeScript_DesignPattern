import Aggregator from "./Aggregator";
import Item from "./Item";
import Iterator from "./Iterator";
import LinkedListIterator from "./LinkedListIterator";

class ListNode {
  constructor(public value: Item, public next: ListNode | null = null) {}
}

class LinkedList implements Aggregator<Item> {
  private head: ListNode | null;

  constructor(items: Item[]) {
    this.head = null;
    for (const item of items) {
      this.append(item);
    }
  }

  public append(value: Item): void {
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
  }

  get firstNode(): ListNode | null {
    return this.head;
  }

  iterator(): Iterator<Item> {
    return new LinkedListIterator(this);
  }
}

export { LinkedList, ListNode };
