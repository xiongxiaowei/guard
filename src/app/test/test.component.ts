import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
    $(function () {
      $('input').click(()=>{
        $('h3').toggle()
      })
    })
  }

  ngOnInit() {

  }

}
