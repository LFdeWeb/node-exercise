function taketLongTimes () {
  return new Promise(resolve=> {
    setTimeout(()=> resolve('longTime'), 3000)
  }).then(res => console.log(res))
}
async function test() {
  const v = await taketLongTimes();
  console.log(v)
  console.log(12)
}


test()