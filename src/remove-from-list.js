function removeKFromList(l, k) {
  if (k === l.value) {
    l = l.next;
  }
  let head = l;
  let prev = null;
  while (head.next) {
    prev = head;
    head = head.next;
    if (head.value === k) {
      prev.next = head.next;
      head = prev;
    }
  }

  return l;
}

module.exports = {
  removeKFromList,
};
