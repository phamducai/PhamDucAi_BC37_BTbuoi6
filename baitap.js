function ex1() {
  var sum = 0;
  var n = 0;
  for (var i = 0; sum + i < 10000; i++) {
    sum = sum + i;
    n = i;
  }
  console.log(n);
}
ex1();
function ex2() {
  var n = 2;
  var x = 3;
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum = sum + Math.pow(x, i);
  }
  console.log(sum);
}
ex2();
function ex3() {
  var factorial = 1;
  var n = 3;

  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}
ex3();
