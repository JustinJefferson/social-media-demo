import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { CONTENTS } from '../mock-content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contents = CONTENTS;

  content = {
    title: 'This is a Title',
    text: 'I shall put a paragraph here containing all of the information that I need.'
  };

  constructor() { }

  ngOnInit() {
  }

}
