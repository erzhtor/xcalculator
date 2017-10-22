import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser'
import * as cors from 'koa2-cors';

import { infixToPostfix } from "./infix-to-postfix";
import { stringToInfix } from "./string-to-infix";

const app = new Koa();
app.use(cors({
    origin: '*'
}))
app.use(bodyparser());
app.use((ctx, next) => {
    try {

        const { expression } = ctx.request.body;
        const infixNotation = stringToInfix(expression);
        const postfixNotation = infixToPostfix(infixNotation);
        ctx.body = {
            status: 'success',
            data: postfixNotation.join(' ')
        }
    } catch (err) {
        ctx.body = {
            status: 'error',
        }
    }
})

app.listen(3000);
