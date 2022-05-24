import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-interval-selector',
  templateUrl: './interval-selector.component.html',
  styleUrls: ['./interval-selector.component.css']
})
export class IntervalSelectorComponent implements OnInit {

  candleIntervals = [
    {
      interval: 'm1',
      label: '1 Minute'
    },
    {
      interval: 'm5',
      label: '5 Minutes'
    },
    {
      interval: 'm15',
      label: '15 Minutes'
    },
    {
      interval: 'm30',
      label: '30 Minutes'
    },
    {
      interval: 'h1',
      label: '1 Hour'
    },
    {
      interval: 'h2',
      label: '2 Hours'
    },
    {
      interval: 'h4',
      label: '4 Hours'
    },
    {
      interval: 'h8',
      label: '8 Hours'
    },
    {
      interval: 'h12',
      label: '12 Hours'
    },
    {
      interval: 'd1',
      label: '1 Day'
    },
    {
      interval: 'w1',
      label: '1 Week'
    }
  ]
  selectedInterval: any = 'm1'

  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.onSubmit.emit(this.selectedInterval)
  }

}
