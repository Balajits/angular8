import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Policy } from '../policy';

import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  policies: Policy[];
  selectedPolicy: Policy  = { id :  null , number: null, amount:  null };
  router: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
