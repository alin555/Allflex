import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-week',
  templateUrl: './first-week.component.html',
  styleUrls: ['./first-week.component.css']
})
export class FirstWeekComponent implements OnInit {

  popUp = false;
  popStart = false;
  anim = true;
  text;
  @Input() page = 1;
  constructor() { }

  ngOnInit(): void {
    if (this.page == 2) this.text = 'pathways';
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

  changeText(text) {
    if (this.page == 2) {
      if (this.text == text) {
        this.text = null;
      } else {
        this.text = text;
      }
    }
  }
}
