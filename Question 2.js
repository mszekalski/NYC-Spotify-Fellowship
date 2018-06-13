function decodeString(s) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      array.push(s[i]);
    }
  }
}
