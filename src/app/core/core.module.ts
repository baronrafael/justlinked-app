import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphQLModule,
    HttpClientModule
  ],
  exports: [
    GraphQLModule,
    HttpClientModule
  ]
})
export class CoreModule { }
