package remove_linked_list_elements

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

func RemoveElements(head *ListNode, val int) *ListNode {
	dummy := &ListNode{0, head}

	prev := dummy

	curr := head

	for curr != nil {
		nxt := curr.Next

		if curr.Val == val {

			prev.Next = nxt

		} else {
			prev = curr
		}

		curr = nxt
	}

	return dummy.Next

}
