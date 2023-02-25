import { isNonNullable } from './is-non-nullable';
import { pickBy } from './pick-by';

export function pickDefined<TObject extends Record<string, unknown>>(
  object: TObject | undefined | null,
): {[TKey in keyof TObject]: Exclude<TObject[TKey], null>} {
  return pickBy(object ?? {}, isNonNullable) as {[TKey in keyof TObject]: Exclude<TObject[TKey], null>} 
}
