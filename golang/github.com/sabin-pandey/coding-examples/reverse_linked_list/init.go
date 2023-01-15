package reverse_linked_list

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * } b
 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func ReverseList(head *ListNode) *ListNode {

	curr := head

	var prev *ListNode

	for curr != nil {
		next := curr.Next
		prev = curr
		curr.Next = prev
		curr = next
	}

	return prev
}
