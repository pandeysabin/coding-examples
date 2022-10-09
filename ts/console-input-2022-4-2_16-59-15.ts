// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/

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
    this.val = !val ? 0 : val;
    this.next = !next ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    tortoise = tortoise?.next ?? null;
    hare = hare?.next.next;
    if (tortoise === hare) {
      tortoise = head;
      while (hare !== tortoise) {
        hare = hare?.next ?? null;
        tortoise = tortoise?.next ?? null;
      }
      return hare;
    }
  }

  return null;
}

const listNode4 = new ListNode(-4, listNode3);

const listNode2 = new ListNode(0, listNode4);

const listNode3 = new ListNode(2, listNode2);

const listNode1 = new ListNode(3, listNode3);

console.log(detectCycle(listNode1));
