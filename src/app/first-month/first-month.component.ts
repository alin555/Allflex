import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-month',
  templateUrl: './first-month.component.html',
  styleUrls: ['./first-month.component.css']
})
export class FirstMonthComponent implements OnInit {

  firstPopUp = false;
  secondPopUp = false;
  firstPopStart = false;
  secondPopStart = false;
  firstAnim = true;
  secondAnim = true;

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/first-month.png')";
  }

  firstPop() {
    this.firstPopStart = true;
    this.secondPopUp = false;
    this.firstPopUp = !this.firstPopUp;
    this.firstAnim = false
    if (!this.firstPopUp) {
      setTimeout(() => {
        !this.firstPopUp ? this.firstPopStart = false : null;
      }, 250);
    }
  }

  secondPop() {
    this.secondPopStart = true;
    this.firstPopUp = false;
    this.secondPopUp = !this.secondPopUp;
    this.secondAnim = false
    if (!this.secondPopUp) {
      setTimeout(() => {
        !this.secondPopUp ? this.secondPopStart = false : null;
      }, 250);
    }
  }

}
