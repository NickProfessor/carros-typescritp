import { Carro } from "./carro.js";

export class Carros {
  private _carros: Carro[] = [];
  public adicionaCarro(carro: Carro): void {
    this._carros.push(carro);
  }

  public lista(): ReadonlyArray<Carro> {
    return this._carros;
  }
}
