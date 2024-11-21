/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let currentNode;
  if (list1.val < list2.val) {
    currentNode = list1;
    list1 = list1.next;
  } else {
    currentNode = list2;
    list2 = list2.next;
  }
  const headNode = currentNode;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      currentNode = currentNode.next;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      currentNode = currentNode.next;
      list2 = list2.next;
    }
  }

  currentNode.next = list1 !== null ? list1 : list2;

  return headNode;
};
