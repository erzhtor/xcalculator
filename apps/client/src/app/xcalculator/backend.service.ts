import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) { }

    convertToPostfix(expression: string): Promise<(string | number)[]> {
        return this.http.
            post<any>('//localhost:3000', {
                expression
            }).
            toPromise().
            then((response) => {
                const { status, data } = response;
                if (status === 'success') {
                    return data;
                } else {
                    throw new Error('error while converting to postfix');
                }
            });
    }

    calculateExpression(postfixExpression: (string | number)[]): Promise<string> {
        return this.http.
            post<any>('//localhost:3001', {
                expression: postfixExpression
            }).
            toPromise().
            then(response => {
                const { status, data } = response;
                if (status === 'success') {
                    return data;
                } else {
                    throw new Error('error while calculating postfix notation');
                }
            });
    }
}
