
let str = "Today is Wendnesday";
function reverse(str) {
  let j = str.length - 1,
    i = j;
  let res = "";
  while (i >= 0) {
    while (i >= 0 && str[i] !== " ") {
      i--;
    }
    res = res + str.slice(i + 1, j + 1) + " ";
    while (i >= 0 && str[i] == " ") {
      i--;
    }
    j = i;
  }
  return res;
}

console.log(reverse(str));
