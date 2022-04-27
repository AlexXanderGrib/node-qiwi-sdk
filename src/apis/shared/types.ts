export type AnyResponse = Record<string, any>;
export type Collection<T> = Iterable<T> | ArrayLike<T>;
export type ObjectKey = string | number;
export type ReadonlyRecord<K extends ObjectKey, V> = Readonly<Record<K, V>>;