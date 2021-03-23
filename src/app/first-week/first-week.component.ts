import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-week',
  templateUrl: './first-week.component.html',
  styleUrls: ['./first-week.component.css']
})
export class FirstWeekComponent implements OnInit {

  popUp = false;
  popStart = false;
  anim = true;
  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/first-week.png')";
  }

  pop() {
    this.popStart = true;
    this.popUp = !this.popUp;
    this.anim = false
    if (!this.popUp) {
      setTimeout(() => {
        !this.popUp ? this.popStart = false : null;
      }, 250);
    }
  }
}
