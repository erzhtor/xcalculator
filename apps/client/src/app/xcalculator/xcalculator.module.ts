import { BackendMockService } from './backendMock.service';
import { BackendService } from './backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { XCalculatorComponent } from './xcalculator.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [XCalculatorComponent],
    declarations: [XCalculatorComponent],
    providers: [BackendService]
})
export class XCalculatorModule { }
