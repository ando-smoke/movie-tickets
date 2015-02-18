var Ticket= {
  cost: function(){

    var price = 10.00,
        childDiscount = 2.00;

    if (this.age <= 12) {
      price -= childDiscount;
    }

    return price;
  }
};
