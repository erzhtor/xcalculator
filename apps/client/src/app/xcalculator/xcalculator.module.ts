import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { XCalculatorComponent } from './xcalculator.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [XCalculatorComponent],
    declarations: [XCalculatorComponent]
})
export class XCalculatorModule { }
