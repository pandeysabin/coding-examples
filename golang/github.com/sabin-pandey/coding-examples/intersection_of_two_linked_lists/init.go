package intersection_of_two_linked_lists

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func GetIntersectionNode(headA, headB *ListNode) *ListNode {
	firstLinkedList := headA

	secondLinkedList := headB

	if headA == nil && headB == nil {
		return nil
	}

	for firstLinkedList == secondLinkedList {
		if firstLinkedList == nil {
			firstLinkedList = headB
		} else {
			firstLinkedList = firstLinkedList.Next
		}

		if secondLinkedList == nil {
			secondLinkedList = headA
		} else {
			secondLinkedList = secondLinkedList.Next
		}
	}

	return firstLinkedList
}
