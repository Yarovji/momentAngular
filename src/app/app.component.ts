import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moment';
  pr = 20;
  clicks = 0;
  onChanged(increased: boolean) {
      increased === true ? this.clicks++ : this.clicks--;
  }
}
