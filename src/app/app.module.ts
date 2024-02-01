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
import { ControlStructuresComponent } from './python/control-structures/control-structures.component';
import { FunctionsComponent } from './python/functions/functions.component';
import { DataStructuresComponent } from './python/data-structures/data-structures.component';
import { StringManipulationComponent } from './python/string-manipulation/string-manipulation.component';
import { FileHandlingComponent } from './python/file-handling/file-handling.component';
import { ExceptionHandlingComponent } from './python/exception-handling/exception-handling.component';
import { OopsComponent } from './python/oops/oops.component';
import { ModulesAndPackagesComponent } from './python/modules-and-packages/modules-and-packages.component';
import { RegularExpressionsComponent } from './python/regular-expressions/regular-expressions.component';
import { AdvancedDataStructuresComponent } from './python/advanced-data-structures/advanced-data-structures.component';
import { AdvancedTopicsComponent } from './python/advanced-topics/advanced-topics.component';
import { BuiltInFunctionsAndLibrariesComponent } from './python/built-in-functions-and-libraries/built-in-functions-and-libraries.component';
import { WorkingWithApisComponent } from './python/working-with-apis/working-with-apis.component';
import { DatabaseInteractionComponent } from './python/database-interaction/database-interaction.component';
import { UnitTestingComponent } from './python/unit-testing/unit-testing.component';
import { VirtualEnvironmentsComponent } from './python/virtual-environments/virtual-environments.component';
import { DebuggingAndProfilingComponent } from './python/debugging-and-profiling/debugging-and-profiling.component';
import { WebDevelopmentComponent } from './python/web-development/web-development.component';
import { GuiProgrammingComponent } from './python/gui-programming/gui-programming.component';
import { ConcurrencyAndThreadingComponent } from './python/concurrency-and-threading/concurrency-and-threading.component';
import { NetworkingComponent } from './python/networking/networking.component';
import { DataScienceAndAnalysisComponent } from './python/data-science-and-analysis/data-science-and-analysis.component';
import { MachineKnowledgeBaseAndAiComponent } from './python/machine-knowledge-base-and-ai/machine-knowledge-base-and-ai.component';
import { WebScrapingComponent } from './python/web-scraping/web-scraping.component';

@NgModule({
  declarations: [
    AppComponent,
    PythonComponent,
    AdvancePythonComponent,
    PythonTopicsComponent,
    CodeTemplateComponent,
    ReserveComponent,
    BasicSyntaxComponent,
    ControlStructuresComponent,
    FunctionsComponent,
    DataStructuresComponent,
    StringManipulationComponent,
    FileHandlingComponent,
    ExceptionHandlingComponent,
    OopsComponent,
    ModulesAndPackagesComponent,
    RegularExpressionsComponent,
    AdvancedDataStructuresComponent,
    AdvancedTopicsComponent,
    BuiltInFunctionsAndLibrariesComponent,
    WorkingWithApisComponent,
    DatabaseInteractionComponent,
    UnitTestingComponent,
    VirtualEnvironmentsComponent,
    DebuggingAndProfilingComponent,
    WebDevelopmentComponent,
    GuiProgrammingComponent,
    ConcurrencyAndThreadingComponent,
    NetworkingComponent,
    DataScienceAndAnalysisComponent,
    MachineKnowledgeBaseAndAiComponent,
    WebScrapingComponent
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
