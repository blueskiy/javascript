let restaurant = {
  name: 'Comida',
  guestCapacity: 75,
  guesCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guesCount;
    return partySize <= seatsLeft;
  },
  // seatParty
  seatParty: function (partySize) {
    this.guesCount += partySize;
  },
  // removeParty
  removeParty: function (partySize) {
    this.guesCount -= partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
