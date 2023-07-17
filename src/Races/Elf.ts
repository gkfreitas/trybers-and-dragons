import Race from './Race';

export default class Elf extends Race {
  _maxlifePoints: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 99; 
  }

  static createdRacesInstances() {
    Elf.instances += 1;
    return Elf.instances;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}