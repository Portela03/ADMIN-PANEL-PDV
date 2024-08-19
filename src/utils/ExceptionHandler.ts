import { Result } from "./Result";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function ExceptionHandler() {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (err) {
        return Result.Error({ code: "UNKNOWN" });
      }
    };

    return descriptor;
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */