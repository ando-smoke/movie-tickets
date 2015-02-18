var Ticket= {
  cost: function(){

    var price = 10.00,
        childDiscount = 2.00,
        eveningCharge = 5.00,
        seniorDiscount = 4.00,
        firstReleaseCharge = 2.75;

    if (this.ageGroup === "child") {
      price -= childDiscount;
    } else if (this.ageGroup === "senior"){
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
