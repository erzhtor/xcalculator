const calculatePostfix = (tokens: string[]) => {
    const operandStack = [];
    let token = tokens.shift();
    while (token) {
        switch (token) {
            case '/':
            case '*':
            case '-':
            case '+':
                const secondOperand = operandStack.pop();
                const firstOperand = operandStack.pop();
                const tmpResult = eval(`${firstOperand}${token}${secondOperand}`);
                operandStack.push(tmpResult);
                break;
            default:
                operandStack.push(parseFloat(token));
                break;
        }
        token = tokens.shift();
    }
    return operandStack.pop();
}

export { calculatePostfix }
