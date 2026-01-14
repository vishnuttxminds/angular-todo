import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { InsertOnListComponent } from './screens/insert-on-list/insert-on-list.component';
import { MaterialUItodoComponent } from './screens/material-uitodo/material-uitodo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { DueTimeComponent } from './screens/due-time/due-time.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewTodoProgComponent } from './screens/new-todo-prog/new-todo-prog.component';
import { PostsComponent } from './screens/posts/posts.component';
import { UserSearchComponent } from './screens/user-search/user-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { QuotesComponent } from './screens/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertOnListComponent,
    MaterialUItodoComponent,
    NewTodoProgComponent,
    DueTimeComponent,
    PostsComponent,
    UserSearchComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatChipsModule  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
