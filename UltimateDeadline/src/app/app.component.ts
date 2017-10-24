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
    const el = document.getElementById('weeksList');
    for (let i = 0; i < this.weeks; i++) {
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'cbWeek';
      cb.id = 'week' + i;
      el.appendChild(cb);
    }
  }

  public checkAllUsedWeeks() {
    this.setDefaults();

    const weeksToCheck = this.age * 52;

    this.clearCheckedWeeks();

    for (let i = 0; i < weeksToCheck; i++) {
      const cb = <HTMLInputElement>this.cbs[i];
      cb.checked = true;
    }

    this.generateExplanation();
  }

  private setDefaults() {
    if (this.age < 1) {
      this.age = 1;
    }
    if (this.age > 80) {
      this.age = 80;
    }
  }

  private clearCheckedWeeks() {
    for (let i = 0; i < this.cbs.length; i++) {
      const cb = <HTMLInputElement>this.cbs[i];
      cb.checked = false;
    }
  }

  private generateExplanation() {
    const weeksUsed = this.age * 52;
    const percentUsed = weeksUsed / this.weeks * 100;
    const slept = weeksUsed / 3.3;
    const percentSlept = 33;
    const yearOfDeath = (new Date()).getFullYear() + (80 - this.age);

    const div = document.getElementById('exp');
    const paragraph = document.getElementById('expPara');

    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    paragraph.innerHTML = "The average human lifespan lies somewhere around 80 years." + "<br><br>" + "You used up <strong><u>" + weeksUsed + "</u></strong> weeks already, or <strong><u>" + percentUsed.toFixed(1) + "%</u></strong> of your available time. Approximately <strong><u>" + slept.toFixed(0) + "</u></strong> weeks (<strong><u>" + percentSlept.toFixed(1) + "%</u></strong>) of your life have been spent asleep." + "<br><br>" + "If you think about doing something (anything, really), you should do it now because you'll most likely be dead sometime around " + "the year <strong><u>" + yearOfDeath + "</u></strong>.<br><br>" + "Have a nice day!";

    div.appendChild(paragraph);
  }
}
