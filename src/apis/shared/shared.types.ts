export type AnyResponse = Record<string, any>;
export type Collection<T> = Iterable<T> | ArrayLike<T>;
type PropertyCollection<K, V> = Collection<[key: K, value: V]>;

export type Mapping<K, V> = {
  get(key: K): V | undefined;
  has(key: K): boolean;
  entries(): PropertyCollection<K, V>;
};
export type ObjectKey = string | number;

export type AnyMapping<K, V> = Mapping<K, V> | PropertyCollection<K, V>;
export type ReadonlyRecord<K extends ObjectKey, V> = Readonly<Record<K, V>>;

export type ObjectMapping<K extends ObjectKey, V> =
  | ReadonlyRecord<K, V>
  | AnyMapping<K, V>;
