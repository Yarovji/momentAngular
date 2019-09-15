import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MomentComponent } from './moment/moment.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { FormsModule } from '@angular/forms';
import { ComeCompComponent } from './moment/come-comp/come-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentComponent,
    LifeCycleHooksComponent,
    ComeCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
