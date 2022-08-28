import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exceptions/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const obj = plainToInstance(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      const errorsObj = {};
      errors.forEach((item) => {
        errorsObj[item.property] = Object.values(item.constraints);
      });
      throw new ValidationException(JSON.stringify(errorsObj));
    }
    return value;
  }
}
