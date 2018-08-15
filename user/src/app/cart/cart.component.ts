import { Component, OnInit } from '@angular/core';
import { CartitemService } from "../cartitem.service"
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public item:CartitemService) { }
  cartdata;cartda;value=1;qtyy=1;cartlength;cartitemlength;list;

  // getSum(column) : number {
  //   let sum = 0;
  //   for(let i = 0; i < this.list.length; i++) {
  //     sum += this.list[i][column];
  //   }
  //   return sum;
  // }
funremoveitem(itm){
  var locit=localStorage.getItem("cart_items")
  var locitm=JSON.parse(locit)
   alert(itm)
    locitm.splice(itm,1)
    localStorage.setItem("cart_items",JSON.stringify(locitm))
    alert("item removed")
  
}

  increaseValue(dt){
    if(this.value==dt)
   // alert("Exceed....")
   alert('We re sorry! Only ' + this.value + ' units for each customer.');

    else
    {
      this.value++;
    }
  }
  decreaseValue()
  {
    if(this.value>1)
    {
      this.value--;
    }
  }
  tot_cart_items;arr;price;
  ngOnInit() {
   
    if(localStorage.getItem('cart_items')!=null){
      var cartlength=(JSON.parse(localStorage.getItem('cart_items')));
      this.item.funchangeinitialitem(cartlength.length.toString());
  
      this.item.currentcartitem.subscribe(citm=>{
        this.cartitemlength=citm
        
      })
    }
    
   
    var arr=localStorage.getItem("cart_items")
    
    arr=arr.replace(/\\/g,"")
    arr=arr.replace(/"{/g,"{") 
    arr=arr.replace(/}"/g,"}")
    this.arr=JSON.parse(arr)
     this.tot_cart_items=arr.length
    this.price=this.arr[0].price;
    alert(this.price)
     for(var j=0; j <= this.price; j++){
       alert(j)
     }
     
     
    //  var sum = 0;
    //  var abc=['100','300','400','60','40'];    
    //  for(var i=0; i < abc.length; i++){
     
    //      sum += parseInt(abc[i]);
     
    //  }
    //  console.log(sum)
    //  alert(sum);

    // this.cartda = localStorage.getItem("cart_items");
    // this.cartdata = JSON.parse(this.cartda);
   
  }

}
