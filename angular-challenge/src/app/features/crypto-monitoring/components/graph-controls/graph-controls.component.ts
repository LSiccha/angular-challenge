import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface Params {
  dateRange: Date[],
  interval: string
}

export interface ToSubmit {
  start?: number,
  end?: number,
  interval?: string
}

@Component({
  selector: 'app-graph-controls',
  templateUrl: './graph-controls.component.html',
  styleUrls: ['./graph-controls.component.css']
})
export class GraphControlsComponent implements OnInit {

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

  params: Params = {
    interval: 'm1',
    dateRange: []
  }

  @Output() onSubmit: EventEmitter<ToSubmit> = new EventEmitter<ToSubmit>()
  @Output() onRealTime: EventEmitter<string> = new EventEmitter<string>()

  submit(){
    let data : ToSubmit = {}
    if (this.params.dateRange[0]){
      data.start = this.params.dateRange[0].getTime()
    }
    if (this.params.dateRange[1]){
      data.end = this.params.dateRange[1].getTime()
    }
    data.interval = this.params.interval
    this.onSubmit.emit(data)
    //console.log(data)
  }

  submitReal(){
    this.params.dateRange = []
    this.onRealTime.emit()
  }


  constructor() { }

  ngOnInit(): void {
  }

}
