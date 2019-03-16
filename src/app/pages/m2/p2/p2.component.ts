import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.less']
})
export class P2Component implements OnInit {

  txt: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const that = this;
    this.http.post('m2/p2', null).subscribe(res => {
      that.txt = res['id'];
    });
  }

}
