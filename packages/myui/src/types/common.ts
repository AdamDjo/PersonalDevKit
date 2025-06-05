import { ReactNode } from 'react';

export type Func<T, U> = (a: T) => U;
export type VoidFunc = () => void;
export type UnaryFunction<T> = Func<T, T>;
export type OnEvent<T> = Func<T, void>;
export type Predicate<T> = Func<T, boolean>;
export type UnaryCurriedFunction<T> = Func<T, UnaryFunction<T>>;
export type Nullable<T> = T | null;

export const FontVariants = ['Brand', 'System'] as const;
export type FontVariant = (typeof FontVariants)[number];

export type Icon = ReactNode;
