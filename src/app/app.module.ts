import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule} from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PythonComponent } from './python/python.component';
import { AdvancePythonComponent } from './advance-python/advance-python.component';
import { PythonTopicsComponent } from './python/python-topics/python-topics.component';
import { CodeTemplateComponent } from './code-template/code-template.component';
import { ReserveComponent } from './reserve/reserve.component';
import { BasicSyntaxComponent } from './python/basic-syntax/basic-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    PythonComponent,
    AdvancePythonComponent,
    PythonTopicsComponent,
    CodeTemplateComponent,
    ReserveComponent,
    BasicSyntaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
