import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterStoreActions } from '@root-store/counter-store';

@Component({
  selector: 'app-increment-btn',
  templateUrl: './increment-btn.component.html',
  styleUrls: ['./increment-btn.component.scss']
})
export class IncrementBtnComponent implements OnInit {

  constructor(private store$ : Store) { }

  ngOnInit(): void {
  }

  increment(): void {
    console.log('CounterMainComponent.increment()');
    this.store$.dispatch(CounterStoreActions.Increment());
  }

}
