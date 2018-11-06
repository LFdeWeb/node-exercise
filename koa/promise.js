function getSomething() {
  return 'something';
}


async function  test () {
  const v1 = await getSomething()
  console.log(v1)
}

test()
