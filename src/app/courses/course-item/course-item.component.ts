import { Component, OnInit } from '@angular/core';
import { Course } from '../../Models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  courses: Course[] = [
    {
      subject: 'DF',
      topics: ['asdf', 'hret']
    },
    {
      subject: 'SEPM',
      topics: ['asdf', 'hret']
    },
    {
      subject: 'DF',
      topics: ['asdf', 'hret']
    },
    {
      subject: 'SEPM',
      topics: ['asdf', 'hret']
    },
    {
      subject: 'DF',
      topics: ['asdf', 'hret']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
