import { Component,OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/model/Cart';
import { CartItem } from 'src/app/shared/model/Cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart
  constructor(private cartservice:CartService,public router:Router){
    this.cartservice.getCartObsevable().subscribe((cart)=>{
      this.cart = cart;
    })
  }


  ngOnInit(): void {

  }

  removeFromCart(cartItem:CartItem){
    this.cartservice.removeFromCart(cartItem.food.id);
    // this.router.navigateByUrl('/');
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
  }

}
