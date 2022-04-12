import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { CreatePageComponent } from './list/pages/create-page/create-page.component';
import { OwnNgModelComponent } from './components/own-ng-model/own-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    FormBuilderComponent,
    CreatePageComponent,
    ItemFormComponent,
    OwnNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
