import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewService} from "../../services/new.service";
import {first, reduce} from "rxjs/operators";
import {Observable, Subscription} from "rxjs";

export interface Inums {
  x: number,
  y: number
}

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})

export class SumComponent implements OnInit, OnDestroy {
  // sum!: Observable<number>;
  subs$!: Subscription;
  a = 0;
  b = 0;
  sum = 0;

  constructor(private newService: NewService) { }

  showNumber(): void {
    this.subs$ = this.newService.getNumbers()
      .subscribe( (value: Inums) =>
      {
        this.a = value.x;
        this.b = value.y;
        this.sum = this.newService.getSum(this.a, this.b);
      }
    )
  }

  showSumNumber(): void {
    // return this.newService.getNumbers().pipe(
    //   reduce((x, y) => (x+y))
    // )
  }

  ngOnInit(): void {
    this.showNumber()
    // this.sum = this.showSumNumber();
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

}
