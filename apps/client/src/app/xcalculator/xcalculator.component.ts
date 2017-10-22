import { Component, OnInit } from '@angular/core';

import { BackendService } from './backend.service';
import { LoadState } from './load-state.enum';

@Component({
    selector: 'app-xcalculator',
    templateUrl: './xcalculator.component.html',
    styleUrls: ['./xcalculator.component.css'],
})
export class XCalculatorComponent implements OnInit {
    userText: string;
    postfixedText: (string | number)[];
    resultText: string;

    error: any;
    loadState: LoadState;
    LoadState = LoadState;

    constructor(private backendService: BackendService) { }

    ngOnInit() {
    }

    public async calculate() {
        this.loadState = LoadState.Calculating;
        try {
            this.postfixedText = await this.backendService.convertToPostfix(this.userText);
            this.resultText = await this.backendService.calculateExpression(this.postfixedText);
            this.loadState = LoadState.Ready;
        } catch (err) {
            this.error = err;
            this.loadState = LoadState.Error;
        }
    }

}
