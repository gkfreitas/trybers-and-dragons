import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instances = 0;
  _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    Mage.instances += 1;
    return Mage.instances;
  }

  get energyType(): EnergyType { return this._energyType; }
}
