import { Component } from '@angular/core';

/**
 * Generated class for the AppDragableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-dragable',
  templateUrl: 'app-dragable.html'
})
export class AppDragableComponent {

  text: string;

  constructor() {
    console.log('Hello AppDragableComponent Component');
    this.text = 'Hello World';
  }

}
