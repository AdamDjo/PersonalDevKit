import { render, screen } from '@testing-library/react';
import { OfferTag } from './OfferTag';

describe('OfferTag tests', () => {
  test('OfferTag renders correctly', () => {
    render(<OfferTag>Hello</OfferTag>);
    const offerTag = screen.getByText('Hello');
    expect(offerTag).toBeInTheDocument();
  });

  test('OfferTag Brand variant', () => {
    render(<OfferTag variant="brand">Hello</OfferTag>);
    const offerTag = screen.getByText('Hello');
    expect(offerTag).toHaveClass(
      'myui-border-border-accent myui-text-txt-prim-accent'
    );
  });

  test('OfferTag Default variant', () => {
    render(<OfferTag variant="default">Hello</OfferTag>);
    const offerTag = screen.getByText('Hello');
    expect(offerTag).toHaveClass(
      'myui-border-border-offer-tag myui-text-txt-offer-tag'
    );
  });
});
