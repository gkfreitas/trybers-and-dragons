import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instances = 0;
  _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    Necromancer.instances += 1;
    return Necromancer.instances;
  }

  get energyType(): EnergyType { return this._energyType; }
}