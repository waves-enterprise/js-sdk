import { BasePart } from "ts-api-validator"

export class AnyPart extends BasePart<any> {
  protected getValue<T>(data: T): T {
    return data
  }
}
