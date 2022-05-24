import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Output() onSubmit: EventEmitter<number[]> = new EventEmitter<number[]>()
  dateRange: Date[] = []

  constructor() { }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
    this.submit()

  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
  }

  submit(){
    let timestamps = this.dateRange.map((date) => {
      return date.getTime();})
    this.onSubmit.emit(timestamps)

  }

  ngOnInit(): void {
  }

}
