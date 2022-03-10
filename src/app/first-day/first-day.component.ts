import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.component.html',
  styleUrls: ['./first-day.component.css']
})
export class FirstDayComponent implements OnInit {

  popUp = false;
  popStart = false;
  anim = true;
  @Input() page = 1;

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/first-day.png')";
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
