import { Produto } from './produto';

export class ItemPedido {
  private readonly _id: number | null;
  private readonly _produto: Produto;
  private readonly _quantidade: number;
  private readonly _preco: number;

  public constructor(produto: Produto, quantidade: number);

  public constructor(
    id: number,
    produto: Produto,
    quantidade: number,
    preco: number,
  );

  public constructor(...params: any[]) {
    if (params.length === 2) {
      this._produto = params[0];
      this._quantidade = params[1];
      this._preco = params[0].preco * params[1];
      return;
    }
    this._id = params[0];
    this._produto = params[1];
    this._quantidade = params[2];
    this._preco = params[3];
  }

  get id(): number | null {
    return this._id;
  }

  get produto(): Produto {
    return this._produto;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get preco(): number {
    return this._preco;
  }
}
