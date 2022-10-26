/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyNode = new ListNode(0, head);

  let left: ListNode | null = dummyNode;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n -= 1;
  }

  while (right) {
    right = right.next;
    left = left?.next ?? null;
  }

  if (left?.next) {
    left.next = left?.next.next;
  }

  return dummyNode.next;
}

const fifth = new ListNode(5);
const fourth = new ListNode(4, fifth);
const third = new ListNode(3, fourth);
const second = new ListNode(2, third);
const firstLinkedList = new ListNode(1, second);

console.log(removeNthFromEnd(firstLinkedList, 2));
