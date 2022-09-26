import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  currentUser: any;
  accounts : any = [];
  transactions : any = [];
  selectedStartDate : any;
  selectedEndDate : any;

  constructor(private storageService: StorageService, private userService: UserService, ) { }
  
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.populateAccountTable();
    this.getTransactions();
  }


  populateAccountTable():  void {
    this.userService.getAccountData().subscribe({
      next: data => {
        this.accounts = JSON.parse(data);
        console.log(this.accounts);
      },
      error: err => {console.log(err)
        if (err.error) {
          this.accounts = JSON.parse(err.error).message;
        } else {
          this.accounts = "Error with status: " + err.status;
        }
      }
      });
  }

  getTransactions(): void {
    this.userService.getAllTransactions().subscribe({
      next: data => {
        this.transactions = JSON.parse(data);
      },
      error: err => {console.log(err)
        if (err.error) {
          this.accounts = JSON.parse(err.error).message;
        } else {
          this.accounts = "Error with status: " + err.status;
        }
      }
      });
    }
  submit(): void {


    let result = [];
    for (let key in this.transactions){
      let object = this.transactions[key]
      if (object.date <= this.selectedEndDate && object.date >= this.selectedStartDate){
        result.push(object)  
      }
    }
    console.log(result);
    this.transactions = result;

  }
  back(): void{
    this.getTransactions();
    this.selectedEndDate = '';
    this.selectedStartDate = '';
  }
  
}
