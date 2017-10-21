import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendMockService extends BackendService {

    convertToPostfix(expression: string): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.round(Math.random()) === 1) {
                    reject('Random error');
                } else {
                    resolve('Some cool postfix expression');
                }
            }, 500);
        });
    }

    calculateExpression(postfixExpression: string): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.round(Math.random()) === 1) {
                    reject('Random error');
                } else {
                    resolve('Some cool result');
                }
            }, 500);
        });
    }
}
