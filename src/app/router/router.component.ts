import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
 
})

export class RouterComponent implements OnInit {

  constructor() { }
  title = 'Routing Application';
  ngOnInit() {
  }

}
