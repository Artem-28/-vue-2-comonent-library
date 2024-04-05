import { ComputedRef } from 'vue';

export type UseClassesComposition = (
  baseClass: string,
  options: Readonly<Readonly<Partial<UseClassesOptions>>>
) => UseClassesResult;

export interface UseClassesResult {
  classes: ComputedRef<string[]>;
}

export interface UseClassesOptions {
  color: string;
  outline: boolean;
  disable: boolean;
}
