import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TestUnionAngular } from './test-union-angular.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [TestUnionAngular],
  bootstrap: [],
})
export class UiModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(TestUnionAngular, {
      injector: this.injector,
    });
    customElements.define('test-union-angular', element);
  }
}
