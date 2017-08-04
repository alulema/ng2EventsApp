import {Component, Input, OnInit} from '@angular/core';
// import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {

  @Input() event: any;
//  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
    console.log('foo');
//    this.eventClick.emit('foo');
  }

  logFoo() {
    console.log('logFoo clicked');
  }
}
