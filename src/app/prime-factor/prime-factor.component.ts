import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-factor',
  templateUrl: './prime-factor.component.html',
  styleUrls: ['./prime-factor.component.scss']
})
export class PrimeFactorComponent {
   result: string = '';
  numberToCheck: any;

  isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  checkPrime() {
    if (isNaN(this.numberToCheck)) {
      this.result = "Please enter a valid number.";
    } else {
      if (this.isPrime(this.numberToCheck)) {
        this.result = this.numberToCheck + " is a prime number.";
      } else {
        this.result = this.numberToCheck + " is not a prime number.";
      }
    }
  }

}
