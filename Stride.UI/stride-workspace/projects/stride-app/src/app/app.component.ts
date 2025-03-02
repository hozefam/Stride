import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  version$: Observable<string>;

  constructor(private appService: AppService) {
    console.log('AppComponent constructor');
    this.version$ = this.appService.version$;
  }
}
