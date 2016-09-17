import {MapOfDebris} from "../src/mapOfDebris";

describe('Map of Debris', () => {
    it('given array with name and average altitude should return name orbital period', () => {
        expect(MapOfDebris.toOrbitalPeriods([{name : "sputnik", avgAlt : 35873.5553}])).toEqual([{name: "sputnik", orbitalPeriod: 86400}]);
    });
    it('given array with two name and average altitude should return name and orbital period for both', () => {
        expect(MapOfDebris.toOrbitalPeriods([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).toEqual([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
    });
});