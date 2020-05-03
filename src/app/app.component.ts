import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kawaii';
  opened="true";
  expanded:boolean=false;
  onSidebarToggle(sideNav){
    sideNav.toggle();
    this.expanded=!this.expanded;
  };
  

  constructor(private matIconRegistry:MatIconRegistry, domsanitizer:DomSanitizer){
    matIconRegistry.addSvgIcon(
      'cat',
      domsanitizer.bypassSecurityTrustResourceUrl('assets/svg/143-cat.svg')
    );
    matIconRegistry.addSvgIcon(
      'dog',
      domsanitizer.bypassSecurityTrustResourceUrl('assets/svg/165-dog.svg')
    );
    matIconRegistry.addSvgIcon(
      'fox',
      domsanitizer.bypassSecurityTrustResourceUrl('assets/svg/054-fox.svg')
    );
    matIconRegistry.addSvgIcon(
      'shibaInu',
      domsanitizer.bypassSecurityTrustResourceUrl('assets/svg/019-dog-1.svg')
    );
    matIconRegistry.addSvgIcon(
      'bunny',
      domsanitizer.bypassSecurityTrustResourceUrl('assets/svg/076-rabbit.svg')
    );
    matIconRegistry.addSvgIcon(
      'llama',
      domsanitizer.bypassSecurityTrustResourceUrl('assets/svg/llama.svg')
    );
    matIconRegistry.addSvgIcon(
      'alpaca',
      domsanitizer.bypassSecurityTrustResourceUrl('assets/svg/alpaca.svg')
    );
  }
}
