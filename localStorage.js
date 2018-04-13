class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Sofia';
    this.defaultState = 'BG';
  }
  getLocationFromStorage() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city=localStorage.getItem('city');
    }

    if (localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state=localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocationToStorage(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}