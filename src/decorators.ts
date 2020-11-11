export function MapAsyncErrors<IError extends any, OError extends any>(
  map: (error: IError) => OError | Promise<OError>
): MethodDecorator {
  return function (_target, _prop, descriptor) {
    const original = (descriptor.value as any) as Function;

    return {
      get: function () {
        // @ts-ignore
        const context = this as any;

        return async (...args: any[]) => {
          try {
            return await original.bind(context)(...args);
          } catch (error) {
            throw await map(error);
          }
        };
      } as any
    };
  };
}
