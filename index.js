//Your code here
function justInvoke (cb) {
  let result = cb()
  return result
}

function setThisWithCall(fn, thisValue, arg) {
  let result = fn.call(thisValue, arg)
  return result
}

function setThisWithApply(fn, thisValue, args) {
  let result = fn.apply(thisValue, args)
  return result
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  let resultFunction = functionToBeCopied.bind(thisValue)
  return resultFunction
}
