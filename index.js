console.log('Greetings! Version 1.0.0');

function calculateRPN(str) {
  const stack = [];
  const expressions = str.split(' ');

  expressions.forEach((expression) => {
    if (!isNaN(expression)) {
      stack.push(Number(expression));
    } else {
      const a = stack.pop();
      const b = stack.pop();

      if (a === undefined || b === undefined) {
        throw new Error('Invalid RPN expression: insufficient operands.');
      }

      switch (expression) {
        case '+':
          stack.push(b + a);
          break;
        case '-':
          stack.push(b - a);
          break;
        case '*':
          stack.push(b * a);
          break;
        case '/':
          if (a === 0) {
            throw new Error('Division by zero is not allowed.');
          }
          stack.push(b / a);
          break;
        default:
          throw new Error('Incorrect operator: ' + expression);
      }
    }
  });

  if (stack.length !== 1) {
    throw new Error('Invalid RPN expression: unmatched operators or operands.');
  }

  return stack.pop();
}
module.exports = calculateRPN;