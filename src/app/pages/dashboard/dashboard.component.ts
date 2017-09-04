import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import { single, multi } from './data';

declare let jQuery: any;
declare let require: any;

const highCharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class Dashboard implements AfterViewInit, OnDestroy {
  @ViewChild('chart') chartEl: ElementRef;
  @ViewChild('chart2') chartE2: ElementRef;
  @ViewChild('chartArea') chartArea: ElementRef;

  private _chart: any;
  private _chart2: any;
  private _chartArea: any;



  private randomValue() {
    return Math.floor(Math.random() * 10) + 0;
  }

  showDanger: boolean = false;
  showWarning: boolean = false;
  showYellow: boolean = false;
  showCool: boolean = false;
  greenhood: boolean = false;
  yellowolf: boolean = false;
  redwedding: boolean = false;
  greyjoy: boolean = false;

  innerHeight: any;
  innerWidth: any;

  dangerProperty: boolean = false;
  warningProperty: boolean = false;
  yellowProperty: boolean = false;

  single: any[];
  multi: any[];

  view: any[] = [800, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  showGridLines = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA,'],
  };

  // line, area
  autoScale = true;
  options: Object;
  chart: Object;

  saveChart(chart) {
    this.chart = chart;
  }
  onPointSelect(point) {
    alert(`${point.y} is selected`);
  }
  onSeriesHide(series) {
    alert(`${series.name} is selected`);
  }

  ngAfterViewInit() {
    // this.renderChart();
    const opts: any = {
      title: {
        text: 'Random data spread across time',
      },
      subtitle: {
        text: 'Random data spread across time description',
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
      },
      series: [{
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          const data = [],
            time = (new Date()).getTime();

          for (let i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.floor(Math.random() * 10) + 0,
            });
          }
          return data;
        }()),
      }],
    };

    const areaopts: any = {
      title: {
        text: 'Random data spread across time on Area chart',
      },
      subtitle: {
        text: 'Random data spread across time Area chart description',
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
      },
      yAxis: {
        title: {
          text: 'Nuclear weapon states',
        },
      },
      series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
          1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
          27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
          26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
          22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
          10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
      }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
          4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
          15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
          33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
          35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
          21000, 20000, 19000, 18000, 18000, 17000, 16000]
      }]
    };


    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'spline',
        renderTo: this.chartEl.nativeElement,
      };

      this._chart = new highCharts.Chart(opts);
    }

    if (this.chartE2 && this.chartE2.nativeElement) {
      opts.chart = {
        type: 'spline',
        renderTo: this.chartE2.nativeElement,
      };

      this._chart2 = new highCharts.Chart(opts);
    }

    if (this.chartArea && this.chartArea.nativeElement) {
      areaopts.chart = {
        type: 'area',
        renderTo: this.chartArea.nativeElement,
      };

      this._chartArea = new highCharts.Chart(areaopts);
    }
  }

  ngOnDestroy() {
    this._chart.destroy();
    this._chart2.destroy();

  }

  constructor() {
    Object.assign(this, { single, multi } );
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);

    const me = this;

    setInterval(function () {
      if (me._chart) {
        me._chart['series'][0].addPoint([(new Date()).getTime(), me.randomValue()], true, true);
      }
    }, 2000);
  }

  onSelect(event) {
    console.log(event);
  }

  // doesnt make any sense but these methods work best like this ...
  iamgreyjoy() {
    if ((this.yellowolf === true) || (this.redwedding === true) || (this.greenhood === true)) {
      this.yellowolf = false;
      this.redwedding = false;
      this.greenhood = false;
    }
    this.greyjoy = true;
  }

  iamgreenhood() {
    if ((this.yellowolf === true) || (this.redwedding === true) || (this.greyjoy === true)) {
      this.yellowolf = false;
      this.redwedding = false;
      this.greyjoy = false;
    }
    this.greenhood = true;
  }

  iamredwedding() {
    if ((this.yellowolf === true) || (this.greyjoy === true) || (this.greenhood === true)) {
      this.yellowolf = false;
      this.greyjoy = false;
      this.greenhood = false;
    }
    this.redwedding = true;
  }

  iamyellowolf() {
    if ((this.greyjoy === true) || (this.redwedding === true) || (this.greenhood === true)) {
      this.greyjoy = false;
      this.redwedding = false;
      this.greenhood = false;
    }
    this.yellowolf = true;
  }

  getDanger() {
    if (this.showDanger) {
      return '#EA1E42';
    } else {
      return '#CCCCCC';
    }
  }

  getWarning() {
    if (this.showWarning) {
      return '#FCC03A';
    } else {
      return '#CCCCCC';
    }
  }

  getYellow() {
    if (this.showYellow) {
      return '#FFEC00';
    } else {
      return '#CCCCCC';
    }
  }

  getCool() {
    if (this.showCool) {
      return '#A0C93A';
    } else {
      return '#CCCCCC';
    }
  }

  setClasses() {
    const classes = {
      dangerClass: this.dangerProperty,
      warningClass: this.warningProperty,
      yellowClass: this.yellowProperty,
    };
    return classes;
  }

  issueThis() {
    // this.doNotWarnThis();
    // this.doNotYellowThis();
    this.dangerProperty = true;
  }

  doNotIssueThis() {
    this.dangerProperty = false;
  }

  warnThis() {
    this.warningProperty = true;
  }

  doNotWarnThis() {
    this.warningProperty = false;
  }

  yellowThis() {
    this.yellowProperty = true;
  }

  doNotYellowThis() {
    this.yellowProperty = false;
  }

}
