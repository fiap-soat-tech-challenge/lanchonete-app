import { Cliente } from './cliente';
import { ItemPedido } from './item-pedido';
import { Situacao } from './situacao';

export class Pedido {
  private readonly _id: number | null;
  private readonly _codigoPedido: number;
  private readonly _cliente: Cliente;
  private readonly _itensPedido: Array<ItemPedido>;
  private _precoTotal: number;
  private readonly _situacao: Situacao;
  private readonly _dataHoraCadastro: Date;

  public constructor(
    codigoPedido: number,
    cliente: Cliente,
    itensPedido: Array<ItemPedido>,
  );

  public constructor(
    id: number,
    codigoPedido: number,
    cliente: Cliente,
    itensPedido: Array<ItemPedido>,
    precoTotal: number,
    situacao: Situacao,
    dataHoraCadastro: Date,
  );

  public constructor(...params: any[]) {
    if (params.length === 3) {
      this._codigoPedido = params[0];
      this._cliente = params[1];
      this._itensPedido = params[2];
      this._precoTotal = this.getPrecoTotal(params[2]);
      return;
    }
    this._id = params[0];
    this._codigoPedido = params[1];
    this._cliente = params[2];
    this._itensPedido = params[3];
    this._precoTotal = params[4];
    this._situacao = params[5];
    this._dataHoraCadastro = params[6];
  }

  get id(): number | null {
    return this._id;
  }

  get codigoPedido(): number {
    return this._codigoPedido;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  get itensPedido(): Array<ItemPedido> {
    return this._itensPedido;
  }

  get precoTotal(): number {
    return this._precoTotal;
  }

  get situacao(): Situacao {
    return this._situacao;
  }

  get dataHoraCadastro(): Date {
    return this._dataHoraCadastro;
  }

  private getPrecoTotal(itensPedido: Array<ItemPedido>): number {
    return itensPedido.reduce((valor, item) => {
      return valor + item.preco;
    }, 0);
  }
}
