
const stringToInfix = (expression: string) => {
    return expression.
        replace(/\s*([*\/\-+()])\s*/g, ' $& ').
        trim().
        split(/\s+/)
}

export { stringToInfix };