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

    it("returns the correct cost for an senior ticket to a non-first-release " +
      "movie showing at a matinee time", function() {
      var testTicket = Object.create(Ticket);
      var testMovie = {
        name: "Finding Nemo",
        firstRelease: false,
        matineeTime: true
      };
      testTicket.movie = testMovie;
      testTicket.age = 55;
      expect(testTicket.cost()).to.equal(6.00);
    });

    it("returns the correct cost for an adult ticket to a first-release " +
      "movie showing at a non-matinee time", function() {
      var testTicket = Object.create(Ticket);
      var testMovie = {
        name: "Madagascar 8",
        firstRelease: true,
        matineeTime: false
      };
      testTicket.movie = testMovie;
      testTicket.age = 35;
      expect(testTicket.cost()).to.equal(17.75);
    });
  });




});
