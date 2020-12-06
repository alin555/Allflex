import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.component.html',
  styleUrls: ['./first-day.component.css']
})
export class FirstDayComponent implements OnInit {

  popUp = false;
  popStart = false;

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/first-day.png')";
  }

  pop() {
    this.popStart = true;
    this.popUp = !this.popUp;
  }
}
