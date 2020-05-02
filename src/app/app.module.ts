import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatsComponent } from './cats/cats.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { FoxesComponent } from './foxes/foxes.component';
import { ShibeComponent } from './shibe/shibe.component';
import { DogsComponent } from './dogs/dogs.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BunniesComponent } from './bunnies/bunnies.component';
import { LlamasComponent } from './llamas/llamas.component';
import { AlpacasComponent } from './alpacas/alpacas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FileSaverComponent } from './file-saver/file-saver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CatsComponent,
    ImagePreviewComponent,
    FoxesComponent,
    ShibeComponent,
    DogsComponent,
    BunniesComponent,
    LlamasComponent,
    AlpacasComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    FileSaverComponent
  ],
  entryComponents:[ImagePreviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
