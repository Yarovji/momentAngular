import { Component, OnInit,
   AfterContentChecked,
   OnDestroy,
   DoCheck,
   AfterViewChecked, AfterViewInit, AfterContentInit, OnChanges, SimpleChanges, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges,
 DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy {
   @Input() prop: any;
   @Output() Changed = new EventEmitter<boolean>();
    change(increased: boolean) {
        this.Changed.emit(increased);
    }

  constructor() {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
