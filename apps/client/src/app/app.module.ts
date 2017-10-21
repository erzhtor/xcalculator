import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { XCalculatorModule } from './xcalculator/xcalculator.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        XCalculatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
