import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-before-start',
  templateUrl: './before-start.component.html',
  styleUrls: ['./before-start.component.css']
})
export class BeforeStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/before-start.png')";
  }

}
