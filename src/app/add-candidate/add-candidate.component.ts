import { Component } from '@angular/core';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent {
  products: any[] = [];


  onAddProduct(username: any, email: any, Phone: any) {
    this.products.push({
      username: username.value,
      email: email.value,
      Phone: Phone.value
    })

  }
  onDelete(i: any) {
    if (confirm('Do you want delete this')) {
      this.products.splice(i, 1)
    }


  }
}
