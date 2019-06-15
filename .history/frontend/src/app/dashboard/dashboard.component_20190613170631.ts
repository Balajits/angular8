import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Policy } from '../policy';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies: Policy[];
  selectedPolicy: Policy  = { id :  null , number: null, amount:  null };
  router: any;
  public name = 'Create Policy';
  public str: any;
  constructor(private apiService: ApiService, public snackBar: MatSnackBar) { }


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
        alert('one Policy Updated');
        location.reload();
      });
    } else {

      this.apiService.createPolicy(form.value).subscribe((policy: Policy) => {
        console.log('Policy created, ', policy);
      });
      location.reload();
      alert('one Policy Updated');
    }

  }

  selectPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

  deletePolicy(id) {
    this.apiService.deletePolicy(id).subscribe((policy: Policy) => {
      console.log('Policy deleted, ', policy);
      alert('Deleted');
      location.reload();
    });
  }

  changeLabelName() {
    this.str = 'Update Policy';
    this.name = this.str;
    }
}
