https://angular.io/guide/testing

import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: '<h1>{{title}}</h1>'
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent (inline template)', () => {

  let comp:    BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(BannerComponent);  //TestBed.createComponent creates an instance of BannerComponent
	//*** Do not re-configure TestBed after calling createComponent.
    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });
});

::::Testbed:

TestBed is the first and most important of the Angular testing utilities. It creates an Angular testing module(a class)

that class you configure with the configureTestingModule method to produce the 
module environment for the class you want to test.
The configureTestingModule method takes an @NgModule-like metadata object. 
This metadata object simply declares the component to test, BannerComponent.

Call configureTestingModule within a beforeEach so that TestBed can reset itself to a base state before each test runs.

The base state includes a default testing module configuration consisting of the declarables (components, directives, and pipes) and providers (some of them mocked) that almost everyone needs.

The createComponent method returns a "ComponentFixture", a handle on the test environment surrounding the created component. 


The TestBed.createComponent does not trigger change detection. 

::fixture.detectChanges
The fixture does not automatically push the component's title property value into the data bound element.
we have have to specifically write : fixture.detectChanges();

eq.it('should display a different test title', () => {
  comp.title = 'Test Title';
  fixture.detectChanges();
  expect(el.textContent).toContain('Test Title');
});

::Automatic change detection
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
















