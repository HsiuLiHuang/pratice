let ary = ["1", "10", "12", "6", "23"];

let result = ary.find((items) => items > 10);
console.log(result);

//用for-loop
function find(ary) {
  let result = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] > 10) {
      result.push(ary[i]);
      break
    }
  }
  return result;
}

console.log(find(ary));