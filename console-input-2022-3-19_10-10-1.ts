// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/

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

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast?.next?.next) {
    fast = fast?.next?.next ?? null;
    slow = slow?.next ?? null;

    if (!fast) return false;

    if (fast === slow) {
      return true; // has cycle
    }
  }

  return false; // no cycle
}

const listNode4 = new ListNode(4);

const listNode3 = new ListNode(3, listNode4);

var listNode2 = new ListNode(2, listNode3);

const listNode1 = new ListNode(5, listNode2);

console.log(hasCycle(listNode1));
