import { TitleCasePipe } from './../title-case.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.css']
})
export class TitleFormComponent implements OnInit {

  movieTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event) {
    this.movieTitle = $event.target.value;
  }

}
