describe("Ticket", function() {
  describe("cost", function() {
    it("returns the correct cost for an adult ticket to a non-first-release " +
      "movie showing at a matinee time", function() {
      var testTicket = Object.create(Ticket);
      var testMovie = {
        name: "Boyhood",
        firstRelease: false,
        matineeTime: true
      };
      testTicket.movie = testMovie;
      testTicket.age = 40;
      expect(testTicket.cost()).to.equal(10.00);
    });

    it("returns the correct cost for an child ticket to a non-first-release " +
      "movie showing at a matinee time", function() {
      var testTicket = Object.create(Ticket);
      var testMovie = {
        name: "Finding Nemo",
        firstRelease: false,
        matineeTime: true
      };
      testTicket.movie = testMovie;
      testTicket.age = 10;
      expect(testTicket.cost()).to.equal(8.00);
    });

    it("returns the correct cost for an adult ticket to a non-first-release " +
      "movie showing at a non-matinee time", function() {
      var testTicket = Object.create(Ticket);
      var testMovie = {
        name: "Finding Nemo",
        firstRelease: false,
        matineeTime: false
      };
      testTicket.movie = testMovie;
      testTicket.age = 40;
      expect(testTicket.cost()).to.equal(15.00);
    });
  });




});
