// type.ts is for user created types and index.d.ts is for extending js libraries and built in types

declare global {
  interface String {
    replaceAll(search: string | RegExp, replace: string): string;
  }
  interface Array<T> {
    min(this: number[]): number;
    max(this: number[]): number;
  }
}

export {}; // It makes this file a module
