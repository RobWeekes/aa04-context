function bindToAnArg(func, arg) {
  let newStr = func.bind(arg)
  return newStr()
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
