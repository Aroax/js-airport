'use strict';

describe('Feature Test:', function() {
  let plane;
  let airport;

  beforeEach( () => {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
});
