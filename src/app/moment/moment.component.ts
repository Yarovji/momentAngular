import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log(moment());
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // console.log(moment().format('dddd'));
    // console.log(moment().format('YYYY [shota] YYYY'));
    // console.log(moment('19900511', 'YYYYMMDD').fromNow());
    // console.log(moment().startOf('day').fromNow());
    // console.log(moment().endOf('day').fromNow());
    // console.log(moment().startOf('hour').fromNow());
    // console.log(moment().subtract(1, 'days').calendar());
    // console.log(moment().format('LTS'));
    // console.log(moment().format('llll'));
    // console.log(moment().day());
    // console.log(moment().locale('uk').format('MMMM Do YYYY, h:mm:ss a'));
    // console.log(moment('19900511', 'YYYYMMDD').locale('uk').fromNow());
    // console.log(moment('19900511', 'YYYYMMDD').locale('ru').fromNow());
    // console.log(moment.locales());
    // console.log(moment.locale());
    // console.log(moment('2010-10-20').isBefore('2010-10-21'));
    // console.log(moment().quarter());
    // console.log(moment().set({
    //   date: 11,
    //   M: 4,
    //   year: 1990
    // }).format('DD/MM/YYYY'));
  }

}
