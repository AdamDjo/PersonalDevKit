export const SpinnerSizes = ['small', 'medium', 'large'] as const;
export type SpinnerSize = (typeof SpinnerSizes)[number];

export type SpinnerProps = {
    size?: SpinnerSize;
};
