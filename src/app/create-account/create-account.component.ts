import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private adminService : AdminService) { }
  form: any = {
    accountNumber: null,
    description: null,
    balance: null,
    userId : null,
  };
  errorMessage = '';
  isSuccessful = false;
  isCreateTransactionFailed = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { accountNumber, description, balance, userId } = this.form;
    this.adminService.createAccount(accountNumber, description, balance, userId).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isCreateTransactionFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isCreateTransactionFailed = true;
      }
    });
  }

}
