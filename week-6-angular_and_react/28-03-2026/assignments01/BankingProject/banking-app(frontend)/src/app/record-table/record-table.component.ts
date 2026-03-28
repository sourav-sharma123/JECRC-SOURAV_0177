// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-record-table',
// //   imports: [],
// //   templateUrl: './record-table.component.html',
// //   styleUrl: './record-table.component.css'
// // })
// // export class RecordTableComponent {

// // }

// import { Component, OnInit } from '@angular/core';
// import { TransactionService, Transaction } from '../services/transaction.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-record-table',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './record-table.component.html',
//   styleUrls: ['./record-table.component.css']
// })
// export class RecordTableComponent implements OnInit {

//   transactions: Transaction[] = [];
//   filteredTransactions: Transaction[] = [];
//   selectedDate: string = '';

//   constructor(private service: TransactionService) {}

//   ngOnInit() {
//     this.service.getTransactions().subscribe(data => {
//       this.transactions = data;
//       this.filteredTransactions = [...data];
//     });
//   }

//   filterByDate() {
//     if (!this.selectedDate) return;

//     this.filteredTransactions = this.transactions.filter(
//       t => t.date.includes(this.selectedDate)
//     );
//   }

//   sortByAmount() {
//     this.filteredTransactions.sort((a, b) => a.amount - b.amount);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService, Transaction } from '../services/transaction.service';

@Component({
  selector: 'app-record-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent implements OnInit {

  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  selectedDate: string = '';

  // 🔥 For toggle sort
  isAscending: boolean = true;

  constructor(private service: TransactionService) {}

  ngOnInit() {
    this.service.getTransactions().subscribe(data => {
      this.transactions = data;
      this.filteredTransactions = [...data];
    });
  }

  // ✅ FIXED FILTER
  filterByDate() {
    if (!this.selectedDate) {
      this.filteredTransactions = [...this.transactions];
      return;
    }

    this.filteredTransactions = this.transactions.filter(t =>
      t.date.substring(0, 10) === this.selectedDate
    );
  }

  // 🔥 TOGGLE SORT (ASC / DESC)
  sortByAmount() {
    if (this.isAscending) {
      this.filteredTransactions.sort((a, b) => a.amount - b.amount);
    } else {
      this.filteredTransactions.sort((a, b) => b.amount - a.amount);
    }

    this.isAscending = !this.isAscending;
  }
}