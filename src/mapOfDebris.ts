export class MapOfDebris {

    static toOrbitalPeriods(inputs: any): any {

        let GM: number = 398600.4418;
        let earthRadius: number = 6367.4447;

        let nameAndOrbitalPeriods: any;
        let orbitalPeriodCalc: number;

        let finalListOfDebris: any = [];

        for (let i: number = 0; i < inputs.length; i++) {

            nameAndOrbitalPeriods = {};
            orbitalPeriodCalc = 0;

            orbitalPeriodCalc = Math.round( 2 * Math.PI * Math.sqrt(Math.pow((earthRadius + inputs[i].avgAlt), 3) / GM));

            nameAndOrbitalPeriods = {name: inputs[i].name, orbitalPeriod: orbitalPeriodCalc};

            finalListOfDebris.push(nameAndOrbitalPeriods);
        }


        return finalListOfDebris;
    };
}