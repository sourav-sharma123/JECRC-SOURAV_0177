import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  user:any = {
  name:'',
  email:'',
  phone:'',
  zip:'',
  gender:'',
  deliveryType:'',
  terms:false,
  subscribe:false,
  city:'',
  state:'',
  country:'',
  date:'',
  instructions:'',
  payment:'',
  cardNumber:'',
  expiry:'',
  cvv:'',
  upiId:'',
  addresses:[''],
  payments:['']
};

addAddress(){
  this.user.addresses.push('');
}

addPayment(){
  this.user.payments.push('');
}
}
