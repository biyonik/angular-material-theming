import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SharedMaterialModule} from "./shared-material.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-theming';
}
