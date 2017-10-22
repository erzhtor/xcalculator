import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) { }

    convertToPostfix(expression: string): Promise<(string | number)[]> {
        return this.http.
            post<(string | number)[]>('/api/toPostfix', {
                expression
            }).toPromise();
    }

    calculateExpression(postfixExpression: (string | number)[]): Promise<string> {
        return this.http.
            post<string>('/api/calculate', {
                epxression: postfixExpression
            }).toPromise();
    }
}
