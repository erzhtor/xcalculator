import { Component, OnInit } from '@angular/core';

import { BackendService } from './backend.service';

@Component({
    selector: 'app-xcalculator',
    templateUrl: './xcalculator.component.html',
    styleUrls: ['./xcalculator.component.css'],
})
export class XCalculatorComponent implements OnInit {
    userText: string;
    postfixedText: string;
    resultText: string;
    calculating: boolean;

    constructor(private backendService: BackendService) { }

    ngOnInit() {
    }

    public async calculate() {
        this.calculating = true;
        await this.backendService.
            convertToPostfix(this.userText).
            then(result => this.postfixedText = result).
            catch(reason => this.postfixedText = reason).
            then(this.backendService.calculateExpression).
            then(result => this.resultText = result).
            catch(reason => this.resultText = reason);
        this.calculating = false;
    }

}
