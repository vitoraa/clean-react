export class MinLengthFieldError extends Error {
  constructor () {
    super('Campo inválido')
    this.name = 'MinLengthFieldError'
  }
}
