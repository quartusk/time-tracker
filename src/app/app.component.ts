import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navActiveStatus: boolean[];

  ngOnInit(): void {
    this.navActiveStatus = [true, false, false];
  }

  setNavActiveStatus(navIndex: number): void {
    for (let i = 0; i < 3; i++) {
      this.navActiveStatus[i] = i === navIndex;
    }
  }
}
