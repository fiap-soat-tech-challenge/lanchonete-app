export class Cliente {
  private readonly _id: number | null;
  private readonly _cpf: string;
  private readonly _nome: string;
  private readonly _email: string;
  private readonly _telefone: string;
  private readonly _dataHoraCadastro: Date;

  public constructor(
    cpf: string,
    nome: string,
    email: string,
    telefone: string,
  );

  public constructor(
    id: number,
    cpf: string,
    nome: string,
    email: string,
    telefone: string,
    dataHoraCadastro: Date,
  );

  public constructor(...params: any[]) {
    if (params.length === 4) {
      this._cpf = params[0];
      this._nome = params[1];
      this._email = params[2];
      this._telefone = params[3];
      return;
    }
    this._id = params[0];
    this._cpf = params[1];
    this._nome = params[2];
    this._email = params[3];
    this._telefone = params[4];
    this._dataHoraCadastro = params[5];
  }

  get id(): number | null {
    return this._id;
  }

  get cpf(): string {
    return this._cpf;
  }

  get nome(): string {
    return this._nome;
  }

  get email(): string {
    return this._email;
  }

  get telefone(): string {
    return this._telefone;
  }

  get dataHoraCadastro(): Date {
    return this._dataHoraCadastro;
  }
}
