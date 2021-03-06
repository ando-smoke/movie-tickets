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


$(function(){
  var firstOrSecond = ["first", "second"];
  var matineeOrEvening = ["matinee", "evening"];

  firstOrSecond.forEach(function(outerElem) {
    matineeOrEvening.forEach(function(innerElem) {
      $("." + outerElem + "-run." + innerElem).click(function() {
        var ageGroup = $("#age-groups").val();
        var movie = {
          firstRelease: (outerElem === "first"),
          matineeTime: (innerElem === "matinee")
        };
        var ticket = Object.create(Ticket);
        ticket.ageGroup = ageGroup;
        ticket.movie = movie;
        $("#ticket-cost").text(ticket.cost().toFixed(2));
        $("#ticket-cost-summary").show();
      });
    });
  });
});
