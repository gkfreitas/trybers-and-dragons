import Race from './Race';

export default class Orc extends Race {
  _maxlifePoints: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 74; 
  }

  static createdRacesInstances() {
    Orc.instances += 1;
    return Orc.instances;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}