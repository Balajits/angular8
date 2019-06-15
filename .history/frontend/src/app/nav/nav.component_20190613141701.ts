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
    this.apiService.readPolicies().subscribe((policies: Policy[]) => {
      this.policies = policies;
      console.log(this.policies);
    });
  }
  createOrUpdatePolicy(form) {
    if (this.selectedPolicy && this.selectedPolicy.id) {
      form.value.id = this.selectedPolicy.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Policy) => {
        console.log('Policy updated' , policy);
      });
    } else {

      this.apiService.createPolicy(form.value).subscribe((policy: Policy) => {
        console.log('Policy created, ', policy);
      });
    }

  }

  selectPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

  deletePolicy(id) {
    this.apiService.deletePolicy(id).subscribe((policy: Policy) => {
      console.log('Policy deleted, ', policy);
      alert('Deleted');
    });
  }
  view2() {
   this.router.navigate(['dashboard']);
  }

}
