import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import {
  WelcomeComponent,
  HomeComponent,
  FeaturesComponent,
  WorkProcessComponent,
  TestimonialsComponent,
  PricingComponent,
  CounterComponent,
  BlogComponent,
  ContactUsComponent
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { NgsRevealDirective, NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    FeaturesComponent,
    WorkProcessComponent,
    TestimonialsComponent,
    PricingComponent,
    CounterComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgsRevealModule
  ]
})
export class HomeModule { }
