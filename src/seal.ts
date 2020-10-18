export type primitive = string | number | boolean | undefined | null;
export type DeepReadonly<T> = T extends primitive ? T : DeepReadonlyObject<T>;
export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export function deepObjectSeal<T extends object>(
  object: T
): DeepReadonlyObject<T> {
  for (const key in object) {
    if (typeof object[key] === "object") {
      // @ts-ignore
      object[key] = deepObjectSeal(object[key] as object);
    }
  }

  return Object.seal(object) as any;
}
