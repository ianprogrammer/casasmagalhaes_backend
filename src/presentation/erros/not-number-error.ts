export class NotNumberError extends Error {
  constructor (paramName: string) {
    super(`Not number: ${paramName}`)
    this.name = 'Not number'
  }
}
