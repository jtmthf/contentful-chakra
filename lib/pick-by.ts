import { ConditionalPick, ValueOf } from 'type-fest';

export function pickBy<
  TObject extends Record<string, unknown>,
  TCondition extends ValueOf<TObject>,
>(
  object: TObject,
  predicate: (value: ValueOf<TObject>) => value is TCondition,
): ConditionalPick<TObject, TCondition> {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) =>
      predicate(value as ValueOf<TObject>),
    ),
  ) as ConditionalPick<TObject, TCondition>;
}
