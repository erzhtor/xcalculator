import * as Koa from 'koa'
import * as bodyparser from 'koa-bodyparser'

import { calculatePostfix } from './calculate-postfix';

const app = new Koa();

app.use(bodyparser());
app.use((ctx, next) => {
    try {
        const { expression } = ctx.request.body;
        const tokens = expression.split(' ')
        const result = calculatePostfix(tokens);
        ctx.body = {
            status: 'success',
            data: result
        }
    } catch (err) {
        ctx.body = {
            status: 'error'
        }
    }
})

app.listen(3001);
