import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Pan1Component } from './pan1/pan1.component';
import { Pan2Component } from './pan2/pan2.component';
import { Pan3Component } from './pan3/pan3.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,Pan1Component,Pan2Component,Pan3Component,Footer1Component,Footer2Component, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoEats';
}
