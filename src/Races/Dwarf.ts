import Race from './Race';

export default class Dwarf extends Race {
  _maxlifePoints: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 80; 
  }

  static createdRacesInstances() {
    Dwarf.instances += 1;
    return Dwarf.instances;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}