// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/

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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let firstLinkedList = headA;
  let secondLinkedList = headB;

  if (!firstLinkedList || !secondLinkedList) return null;

  while (firstLinkedList !== secondLinkedList) {
    firstLinkedList = firstLinkedList === null ? headB : firstLinkedList?.next;

    secondLinkedList =
      secondLinkedList === null ? headA : secondLinkedList?.next;
  }

  return firstLinkedList;
}
