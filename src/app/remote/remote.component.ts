import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  page = 1;

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('./assets/images/overview.png')";
  }

  prevPage() {
    this.page--;
  }

  nextPage() {
    this.page++
  }
}
