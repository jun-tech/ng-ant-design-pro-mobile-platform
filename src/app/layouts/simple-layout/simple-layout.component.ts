import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.less']
})
export class SimpleLayoutComponent implements OnInit {

  // 默认点中每几个tab
  activeTab = 0;

  // 导航栏
  tabs: [{ title: string, url: string, icon?: string, iconSel?: string }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPress(event) {
    this.activeTab = event.key;
    this.router.navigateByUrl(this.tabs[this.activeTab].url);
  }

}
