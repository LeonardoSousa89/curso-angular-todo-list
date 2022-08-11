import { TodoListComponent } from './modules/home/components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from './modules/home/components/todo-input-add-itens/todo-input-add-itens.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { TodoButtonDeleteAllComponent } from './modules/home/components/todoButtonDeleteAll/todo-button-delete-all.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { HomeComponent } from './modules/home/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    TodoButtonDeleteAllComponent,
    HomeComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
