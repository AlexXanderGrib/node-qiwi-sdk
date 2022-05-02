export declare type AnyResponse = Record<string, any>;
export declare type Collection<T> = Iterable<T> | ArrayLike<T>;
export declare type ObjectKey = string | number;
export declare type ReadonlyRecord<K extends ObjectKey, V> = Readonly<Record<K, V>>;
