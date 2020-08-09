a();
function a() {
  console.log('a is called');
}

var b = 0;
console.log(b);
// 上に持ってきた場合undefined

function a() {
  console.log(c);
  let c = 1;

  d();
  function d() {
    console.log('d is called');
  }
  console.log('a is called');
}
