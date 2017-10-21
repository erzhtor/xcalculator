import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) { }

    convertToPostfix(expression: string) {
        return this.http.
            post<string>('/api/toPostfix', {
                expression
            }).toPromise();
    }

    calculateExpression(postfixExpression: string) {
        return this.http.
            post<string>('/api/calculate', {
                epxression: postfixExpression
            }).toPromise();
    }
}
