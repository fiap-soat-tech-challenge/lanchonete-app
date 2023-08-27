import { Categoria } from './categoria';

export class Produto {
  private readonly _id: number | null;
  private readonly _nome: string;
  private readonly _descricao: string;
  private readonly _preco: number;
  private readonly _dataCadastro: Date;
  private readonly _categoria: Categoria;

  public constructor(
    nome: string,
    descricao: string,
    preco: number,
    dataCadastro: Date,
    categoria: Categoria,
  );

  public constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    dataCadastro: Date,
    categoria: Categoria,
  );

  public constructor(...params: any[]) {
    if (params.length === 6) {
      this._nome = params[0];
      this._descricao = params[1];
      this._preco = params[2];
      this._dataCadastro = params[3];
      this._categoria = params[4];
      return;
    }
    this._id = params[0];
    this._nome = params[1];
    this._descricao = params[2];
    this._preco = params[3];
    this._dataCadastro = params[4];
    this._categoria = params[5];
  }

  get id(): number | null {
    return this._id;
  }

  get nome(): string {
    return this._nome;
  }

  get descricao(): string {
    return this._descricao;
  }

  get preco(): number {
    return this._preco;
  }

  get dataCadastro(): Date {
    return this._dataCadastro;
  }

  get categoria(): Categoria {
    return this._categoria;
  }
}
