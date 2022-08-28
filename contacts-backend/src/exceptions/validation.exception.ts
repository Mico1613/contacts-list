import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(response: unknown) {
    super(response, HttpStatus.FORBIDDEN);
  }
}
