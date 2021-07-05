'use strict';

describe('Airport', () => {
  let airport;
  let plane;

  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land']);
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  it('clears planes for landing', () => {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
