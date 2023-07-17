import Race from './Race';

export default class Halfling extends Race {
  _maxlifePoints: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 60; 
  }

  static createdRacesInstances() {
    Halfling.instances += 1;
    return Halfling.instances;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}