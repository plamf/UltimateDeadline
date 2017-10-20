import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  age = 30;
  weeks = 4160; // 80 years
  cbs;

  ngOnInit(): void {
    this.generateWeeks();
    this.cbs = document.getElementsByClassName('cbWeek');
  }


  private generateWeeks() {
    for (let i = 0; i < this.weeks; i++) {
      const el = document.getElementById('weeksList');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'cbWeek';
      cb.id = 'week' + i;
      el.appendChild(cb);
    }
  }

  private checkAllUsedWeeks() {
    const weeksToCheck = this.age * 52;

    this.clearCheckedWeeks();

    for (let i = 0; i < weeksToCheck; i++) {
      const cb = <HTMLInputElement>this.cbs[i];
      cb.checked = true;
    }
  }

  private clearCheckedWeeks() {
    for (let i = 0; i < this.cbs.length; i++) {
      const cb = <HTMLInputElement>this.cbs[i];
      cb.checked = false;
    }
  }
}
