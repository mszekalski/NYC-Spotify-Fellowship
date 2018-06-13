function sortByStrings(s, t) {
  let object = {};
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (object[s[i]] === undefined) {
      object[s[i]] = 1;
    } else {
      object[s[i]] += 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    newString += t[i].repeat(object[t[i]]);
  }
  return newString;
}

function sortByStrings(s, t) {
  return s
    .split("")
    .sort(function(a, b) {
      return t.indexOf(a) - t.indexOf(b);
    })
    .join("");
}
