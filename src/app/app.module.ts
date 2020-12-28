import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {QuotePipe} from './pipes/quote.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookFontDirective} from './directives/book-font.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandlerInterceptor} from './error-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    QuotePipe,
    SortPipe,
    BookDetailsComponent,
    BookFontDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
