import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-order-child',
  imports: [],
  templateUrl: './order-child.component.html',
  styleUrl: './order-child.component.css'
})
export class OrderChildComponent implements 
 OnChanges, 
 OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy{
  @Input() orderData: any;
  logs: string[] = [];

  log(message: string){
    this.logs.push('${new Date().toLocaleTimeString()} --${message}');
  }

  ngOnChanges(changes: SimpleChanges) {
      this.log('ngOnChanges - Input data changed');
  }

  ngOnInit(){
      this.log('ngOnInit - Component Initialized');
  }

  ngDoCheck() {
      this.log('ngDoCheck - Change Detected');
  }

  ngAfterContentInit() {
      this.log('ngAfterContentInit - Content Initialized');
  }

  ngAfterContentChecked() {
      this.log('ngAfterContentChecked - Content checked');
  }

  ngAfterViewChecked() {
      this.log('ngAfterViewChecked - Content checked');
  }

  ngAfterViewInit()
  {
      this.log('ngAfterViewInit - View Initialized');
  }

  ngOnDestroy(){
      this.log('ngOnDestroy - Component Destroyed');
  }
}
