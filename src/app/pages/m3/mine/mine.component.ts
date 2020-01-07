import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventor-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.less']
})
export class MineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   /* 我的 ---------------------------------------------*/
   wdData = {
    topMenuData: [
      {text: "我的项目", icon: ""},
      {text: "我的团队", icon: ""}
    ],

    midMenuData: [
     {text: "我的信息", icon: ""},
     {text: "我的证书", icon: ""},
     {text: "我的客户", icon: ""},
     {text: "我的评价", icon: ""},
     {text: "意见反馈", icon: ""},
     {text: "个人设置", icon: ""}
    ]
  }
  // 我的 style
  personalBadge0Style = {
   //  'position':'absolute',
   //  'top': '96px',
   //  'left': '105px',
   'margin-left': '0px',
    'padding': '0 3px',
   'background-color': '#fff',
   'border-radius': '10px',
   'color': '#008ae6'
 };
 personalBadge1Style = {
   // 'position':'absolute',
   //  'top': '96px',
   //  'left': '155px',
   'margin-left': '12px',
    'padding': '0 3px',
   'background-color': '#fff',
   'border-radius': '10px',
   'color': '#008ae6'
 };

}
