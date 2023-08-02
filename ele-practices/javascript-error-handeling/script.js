// Custom Error Throw
function div(a, b) {
  if (b === 0) {
    throw new SyntaxError("Second parameter can't be zero.");
  }
  return a / b;
}

console.log(div(6, 0));
