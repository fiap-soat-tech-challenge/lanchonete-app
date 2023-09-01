import { Categoria } from './categoria';

export class Produto {
  private readonly _id: number | null;
  private _nome: string;
  private _descricao: string;
  private _preco: number;
  private readonly _dataCadastro: Date;
  private _categoria: Categoria;

  public constructor(
    nome: string,
    descricao: string,
    preco: number,
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
    if (params.length === 4) {
      this._nome = params[0];
      this._descricao = params[1];
      this._preco = params[2];
      this._categoria = params[3];
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

  set nome(nome: string) {
    this._nome = nome;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  set preco(preco: number) {
    this._preco = preco;
  }

  set categoria(categoria: Categoria) {
    this._categoria = categoria;
  }
}
