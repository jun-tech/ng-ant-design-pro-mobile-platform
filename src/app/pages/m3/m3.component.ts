import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m3',
  templateUrl: './m3.component.html',
  styleUrls: ['./m3.component.less']
})
export class M3Component implements OnInit {

  hidden = false;
  fullScreen = true;
  topFlag = false;
  tintColor = '#108ee9';
  unselectedTintColor = '#888';

  // 默认点中每几个tab
  activeTab = 0;

  pages = ['m3/p1', 'm3/p2', 'm3/mine', 'm3/match'];

  constructor(private hst: ElementRef, private router: Router) {
  }

  ngOnInit(): void {
  }

}
