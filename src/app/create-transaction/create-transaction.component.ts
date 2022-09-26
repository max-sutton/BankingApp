import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  form: any = {
    amount: null,
    description: null,
    transtype: null,
    accountNumber : null,
  };
  errorMessage = '';
  isSuccessful = false;
  isCreateAccountFailed = false;

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { amount, description, transtype, accountNumber} = this.form;
    this.adminService.createTransaction(amount, description, transtype, accountNumber).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isCreateAccountFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isCreateAccountFailed = true;
      }
    });
  }

}
