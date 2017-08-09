import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  showDanger: false;
  showWarning: false;
  showYellow: false;
  showCool: false;

  dangerProperty: boolean = false;
  warningProperty: boolean = false;
  yellowProperty: boolean = false;
  constructor() {
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
