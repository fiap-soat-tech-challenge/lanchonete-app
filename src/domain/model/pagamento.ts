import { Pedido } from './pedido';
import { StatusPagamento } from './status-pagamento';

export class Pagamento {
  private readonly _id: number | null;
  private readonly _pedido: Pedido;
  private _status: StatusPagamento;

  constructor(pedido: Pedido);

  constructor(id: number, pedido: Pedido, status: StatusPagamento);

  public constructor(...params: any[]) {
    if (params.length === 1) {
      this._pedido = params[0];
      return;
    }
    this._id = params[0];
    this._pedido = params[1];
    this._status = params[2];
  }

  get id(): number | null {
    return this._id;
  }

  get pedido(): Pedido {
    return this._pedido;
  }

  get status(): StatusPagamento {
    return this._status;
  }

  set status(value: StatusPagamento) {
    this._status = value;
  }
}
