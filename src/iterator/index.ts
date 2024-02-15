import Array from "./Array";
import Item from "./Item";

const items = [
  new Item("쿠쿠다스", 2500),
  new Item("사탕", 200),
  new Item("새우깡", 3500),
  new Item("고래밥", 1500),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();

  const domItem = document.createElement("div");
  domItem.innerText = `${item.name}: ${item.cost}원`;
  document.body.appendChild(domItem);

  // css를 적용하기 위한 클래스 추가
  domItem.classList.add("iterator-item");
}
