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

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/first-month.png')";
  }

  firstPop() {
    this.firstPopStart = true;
    this.secondPopUp = false;
    this.firstPopUp = !this.firstPopUp;
  }

  secondPop() {
    this.secondPopStart = true;
    this.firstPopUp = false;
    this.secondPopUp = !this.secondPopUp;
  }

}
