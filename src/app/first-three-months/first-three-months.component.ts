import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-three-months',
  templateUrl: './first-three-months.component.html',
  styleUrls: ['./first-three-months.component.css']
})
export class FirstThreeMonthsComponent implements OnInit {

  popUp = false;
  popStart = false;
  anim = true;

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/first-three-months.png')";
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
