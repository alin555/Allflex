import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  page = 1;
  text = '';

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

  moveToPage(page: number) {
    this.page = page;
  }

  changeTo(text: string) {
    if (this.text == text) {
      this.text = '';
    } else {
      this.text = text;
    }
  }
}
