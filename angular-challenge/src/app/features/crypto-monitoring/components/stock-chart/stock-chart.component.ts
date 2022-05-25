import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Stock} from "@antv/g2plot";
import {Candle} from "../../models/candle.model";

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockChartComponent implements OnInit, AfterViewInit {

  stockPlot!: Stock;

  private _data: Candle[] = []
  @Input('data')
  set data(data){
    this._data = data;
    if (this.stockPlot){
      this.stockPlot.changeData(this._data)
    }
  }
  get data(){
    console.log('change detection')
    return this._data
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const tooltip = {
      crosshairs: {
        line: {
          style: {
            lineWidth: 2,
              stroke: 'rgba(0,0,0,0.25)',
          },
        },
        text: (type: string, defaultContent: number, items: any[]) => {
          let textContent;
          if (type === 'x') {
            const item = items[0];
            textContent = item ? item.title : defaultContent;
          } else {
            textContent = `${defaultContent.toFixed(2)}`;
          }
          return {
            position: type === 'y' ? 'start' : 'end',
            content: textContent,
            style: {
              fill: '#dfdfdf',
            },
          };
        },
          textBackground: {
          padding: [4, 8],
            style: {
            fill: '#363636',
          },
        },
      },
    }


    const options = {
      appendPadding: [0, 10, 0, 0],
      data : this.data,
      xField: 'period',
      yField: ['open', 'close', 'high', 'low'] as [string, string, string, string],
      fallingFill: '#ef5350',
      risingFill: '#26a69a',
      slider: {},
      tooltip: tooltip
    }
    this.stockPlot = new Stock('container', options );

    this.stockPlot.render()

  }

  /*
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.data.isFirstChange()){
      this.stockPlot.changeData(this.data);

    }
  }

   */

}
