import { ReactNode } from 'react';

export const OfferTagVariants = ['default', 'brand'] as const;
export type OfferTagVariant = (typeof OfferTagVariants)[number];

export type OfferTagProps = {
    children: ReactNode;
    variant?: OfferTagVariant;
};
