import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule} from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PythonComponent } from './python/python.component';
import { AdvancePythonComponent } from './advance-python/advance-python.component';
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
import { DecoratorsComponent } from './advance-python/decorators/decorators.component';
import { GeneratorsComponent } from './advance-python/generators/generators.component';
import { IteratorsAndIterablesComponent } from './advance-python/iterators-and-iterables/iterators-and-iterables.component';
import { ContextManagersComponent } from './advance-python/context-managers/context-managers.component';
import { MetaclassesComponent } from './advance-python/metaclasses/metaclasses.component';
import { ConcurrencyAndMultithreadingComponent } from './advance-python/concurrency-and-multithreading/concurrency-and-multithreading.component';
import { CoroutinesAndAsynchronousProgrammingComponent } from './advance-python/coroutines-and-asynchronous-programming/coroutines-and-asynchronous-programming.component';
import { MemoryManagementComponent } from './advance-python/memory-management/memory-management.component';
import { PerformanceOptimizationComponent } from './advance-python/performance-optimization/performance-optimization.component';
import { DynamicTypingAndTypeAnnotationsComponent } from './advance-python/dynamic-typing-and-type-annotations/dynamic-typing-and-type-annotations.component';
import { UnicodeAndInternationalizationComponent } from './advance-python/unicode-and-internationalization/unicode-and-internationalization.component';
import { CExtensionsAndCythonComponent } from './advance-python/c-extensions-and-cython/c-extensions-and-cython.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PythonComponent,
    AdvancePythonComponent,
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
    WebScrapingComponent,
    DecoratorsComponent,
    GeneratorsComponent,
    IteratorsAndIterablesComponent,
    ContextManagersComponent,
    MetaclassesComponent,
    ConcurrencyAndMultithreadingComponent,
    CoroutinesAndAsynchronousProgrammingComponent,
    MemoryManagementComponent,
    PerformanceOptimizationComponent,
    DynamicTypingAndTypeAnnotationsComponent,
    UnicodeAndInternationalizationComponent,
    CExtensionsAndCythonComponent,
    TopicListComponent,
    HeadMenuComponent
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
