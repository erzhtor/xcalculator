import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) { }

    convertToPostfix(expression: string): Promise<(string | number)[]> {
        return this.http.
            post<any>(environment.infixToPostfixUrl, {
                expression
            }).
            toPromise().
            catch((err) => {
                throw new Error('error while communicating with INFIX TO POSTFIX CONVERTER service');
            }).
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
            post<any>(environment.postfixCalculatorUrl, {
                expression: postfixExpression
            }).
            toPromise().
            catch((err) => {
                throw new Error('error while communicating with POSTFIX CALCULATOR service');
            }).
            then(response => {
                const { status, data, message } = response;
                if (status === 'success') {
                    return data;
                } else {
                    throw new Error('error while calculating postfix notation');
                }
            });
    }
}
