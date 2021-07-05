class Airport {
  constructor() {
      this._hangar = [];
  }

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    this._hangar.push(plane);
  };

  clearForTakeoff(plane) {
    if (this.isStormy()) {
      throw new Error('cannot take off during a storm');
    } else {
      this._hangar.pop();
    }
  };

  isStormy() {
    return false;
  };

};
