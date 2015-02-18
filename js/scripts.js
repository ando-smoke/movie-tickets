var Ticket= {
  cost: function(){

    var price = 10.00,
        childDiscount = 2.00,
        eveningCharge = 5.00;

    if (this.age <= 12) {
      price -= childDiscount;
    }
    if (!(this.movie.matineeTime)) {
      price += eveningCharge;
    }

    return price;
  }
};
