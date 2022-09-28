import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.scss']
})
export class AccountinfoComponent implements OnInit {

  selectedDate:any;
  transactions : any = [];
  filteredtransactions : any = [];
  selectedEndDate:any;
  selectedStartDate:any;

  accounts:string = String(this.route.snapshot.paramMap.get('accountNumber'));

  constructor(private userService: UserService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {

    this.getTransactions();

  }

  back(): void{
    this.getTransactions();
    this.selectedEndDate = '';
    this.selectedStartDate = '';
  }

  getTransactions(): void {
    const acctNo = Number(this.route.snapshot.paramMap.get('accountNumber'));
    this.userService.getTransactionData(acctNo).subscribe({
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
     if (object.date < this.selectedEndDate && object.date > this.selectedStartDate){
        result.push(object)  
      }
    }
    console.log(result);
    this.transactions = result;

  }

}
