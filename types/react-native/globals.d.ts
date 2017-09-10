/*
 * This file is necessary to declare global functions that might also be included by `--lib dom`.
 * Due to a TypeScript bug, these cannot be placed inside a `declare global` block in index.d.ts.
 */

//
// Timer Functions
//
declare function clearInterval(handle: number): void;
declare function clearTimeout(handle: number): void;
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
declare function clearImmediate(handle: number): void;
declare function setImmediate(handler: (...args: any[]) => void): number;

declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(callback: (time: number) => void): number;
