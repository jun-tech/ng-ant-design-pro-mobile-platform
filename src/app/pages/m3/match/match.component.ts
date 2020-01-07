import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventor-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.less']
})
export class MatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  /* 精选匹配 ---------------------------------------------*/
  ppData = {
    filterData: [
      { text: "服务类型" },
      { text: "服务对象" },
      { text: "筛选" }
    ]
  };

  filterOnclick() {
    //event.preventDefault(); 
    console.log(11);
  };
}
