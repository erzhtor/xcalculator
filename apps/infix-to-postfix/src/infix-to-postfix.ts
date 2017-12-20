type Precedence = {
    [key: string]: number,
}
let precedence: Precedence = {
    '*': 3,
    '/': 3,
    '%': 3,
    '+': 2,
    '-': 2,
    '(': 1,
    ')': 1,
}
const infixToPostfix = (tokens: string[]) => {
    const opstack = [];
    const output = [];

    let token = tokens.shift();


    while (token) {
        switch (token) {
            case '(':
                opstack.push(token);
                break;
            case ')':
                let operator = opstack.pop();
                while (operator !== '(') {
                    output.push(operator);
                    operator = opstack.pop();
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                while (opstack.length > 0) {
                    let lastOperator = opstack[opstack.length - 1];
                    if (precedence[lastOperator] < precedence[token])
                        break;
                    output.push(opstack.pop());
                }
                opstack.push(token);
                break;
            default:
                output.push(token);
                break;
        }
        token = tokens.shift();
    }
    while (opstack.length > 0) {
        output.push(opstack.pop());
    }
    return output;
}

export { infixToPostfix };
