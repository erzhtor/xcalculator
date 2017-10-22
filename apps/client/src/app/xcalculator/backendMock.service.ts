import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendMockService {

    convertToPostfix(expression: string): Promise<(string | number)[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.round(Math.random()) === 1) {
                    reject('Random error while parsing');
                } else {
                    resolve([1, 2, 3, '-']);
                }
            }, 500);
        });
    }

    calculateExpression(postfixExpression: (string | number)[]): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.round(Math.random()) === 1) {
                    reject('Random error while calculating');
                } else {
                    resolve('2');
                }
            }, 500);
        });
    }
}
