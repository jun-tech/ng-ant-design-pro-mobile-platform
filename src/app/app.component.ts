import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = 'ng-ant-design-pro-mobile-platform';

  hidden = false;
  fullScreen = true;
  topFlag = false;
  tintColor = '#108ee9';
  unselectedTintColor = '#888';

  // 默认点中每几个tab
  activeTab = 0;

  pages = ['m1/p1', 'm2/p2'];

  constructor(private hst: ElementRef, private router: Router) {
  }

  showTabBar(event) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  changePosition(event) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  onPress(event) {
    console.log('event: ', event);
    this.activeTab = event.key;
    const index = event.key % 2;
    this.router.navigateByUrl(this.pages[index]);
  }

  ngOnInit(): void {
    const winHeight = window.innerHeight;
    // this.hst.nativeElement.querySelector('.content').style.height = (winHeight - 50) + 'px';
  }
}
