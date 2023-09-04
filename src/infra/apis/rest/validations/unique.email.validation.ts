import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { UseCasesProxyModule } from '../../../usecases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from '../../../usecases-proxy/use-case-proxy';
import { ClienteUseCases } from '../../../../usecases/cliente.use.cases';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueEmailValidation implements ValidatorConstraintInterface {
  constructor(
    @Inject(UseCasesProxyModule.CLIENTE_USECASES_PROXY)
    private clienteUseCasesUseCaseProxy: UseCaseProxy<ClienteUseCases>,
  ) {}

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `O campo ${validationArguments.property} já foi cadastrado`;
  }

  async validate(
    value: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const clienteByEmail = await this.clienteUseCasesUseCaseProxy
      .getInstance()
      .getClienteByEmail(value);
    return !clienteByEmail;
  }
}

export function UniqueEmail(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidation,
    });
  };
}
