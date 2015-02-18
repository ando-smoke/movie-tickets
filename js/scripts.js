var Ticket= {
  cost: function(){

    var price = 10.00,
        childDiscount = 2.00,
        eveningCharge = 5.00,
        seniorDiscount = 4.00,
        firstReleaseCharge = 2.75;

    if (this.age <= 12) {
      price -= childDiscount;
    } else if (this.age >= 55){
      price -= seniorDiscount;
    }

    if (!(this.movie.matineeTime)) {
      price += eveningCharge;
    }

    if (this.movie.firstRelease) {
      price += firstReleaseCharge;
    }

    return price;
  }
};
