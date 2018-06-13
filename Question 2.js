function decodeString(s) {
  let array = [];
  let numbers = "0123456789";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      array.push(s[i]);
    } else {
      let temp = "";
      let count = "";
      while (array[array.length - 1] !== "[") {
        temp = array.pop() + temp;
      }
      array.pop();
      while (numbers.includes(array[array.length - 1])) {
        count = array.pop() + count;
      }
      count = Number(count);
      temp = temp.repeat(count);
      array.push(temp);
    }
  }
  return array.join("");
}
