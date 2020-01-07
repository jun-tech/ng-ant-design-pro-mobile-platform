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
  tabs: Array<{ title: string, url: string, badge?: string, dot?: boolean, icon?: string, selectedIcon?: string }>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.tabs = [
      { title: 'Life', url: 'm3/p1', badge: 'new', icon: 'icon1', selectedIcon: 'icon11' },
      {
        title: 'Koubei', url: 'm3/p2', badge: '1', icon: 'icon2', selectedIcon: 'icon22'
      },
      {
        title: 'Friend', url: 'm1/p1', dot: true, icon: 'icon3', selectedIcon: 'icon33'
      },
      {
        title: 'My', url: 'm2/p2', icon: 'icon4', selectedIcon: 'icon44'
      }
    ];
  }

  onPress(event) {
    this.activeTab = event.key;
    this.router.navigateByUrl(this.tabs[this.activeTab].url);
  }

}
