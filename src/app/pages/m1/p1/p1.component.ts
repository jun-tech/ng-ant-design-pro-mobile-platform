import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.less']
})
export class P1Component implements OnInit, OnDestroy {

  inter = null;
  txt: string;
  count = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const that = this;
    this.inter = setInterval(() => {
      this.http.post('m1/p1', null).subscribe(res => {
        that.txt = res['id'];
        that.count++;
      });
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.inter);
  }

}
