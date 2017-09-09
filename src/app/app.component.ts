import { Component } from '@angular/core';
import * as transformationDataModel from '../assets/transformationdatamodel.js';
import * as generateClojure from '../assets/generateclojure.js';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private title = 'Click to generate clojure';
  generateClojure() {
    console.log(generateClojure.fromTransformation(transformationDataModel.Transformation.revive(data)));
    console.log(transformationDataModel.Transformation.revive(data));
  };
}