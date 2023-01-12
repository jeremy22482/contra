export function curry(initialFunction: (...arg0: any) => any) {
  return function partialFunction(...args: any): any {
    return args.length >= initialFunction.length
      ? initialFunction.call(null, ...args)
      : partialFunction.bind(null, ...args)
  }
}

export const clamp = curry(
  (min: number, max: number, n: number): number => Math.min(Math.max(n, min), max),
)

export function modulo(n: number, m: number): number {
  return ((n % m) + m) % m
}

/**
 * for loop that runs the callback method 3 times, starting with index -1 and ending with index 1
 * @param {funciton} callback method to be called 3 times
 */
export function sandwich(callback: (index: number) => any): void {
  for (let index = -1; index < 2; index += 1) callback(index)
}

export function insert(str: string, index: number, source: string): string {
  return source.slice(0, index) + str + source.slice(index)
}

export function capitalizeString(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}
