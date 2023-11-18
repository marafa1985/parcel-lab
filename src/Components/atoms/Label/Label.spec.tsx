import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('should render the Label', () => {
    render(<Label>sample test</Label>);
    const result = screen.getByText(/sample test/);
    expect(result).toBeTruthy();
  });

  it('should render have a class name Label by default', () => {
    render(<Label>sample test</Label>);
    const result = screen.getByText(/sample test/);
    expect(result.classList).toContain('Label');
  });

  it('should render have a class name when it pass to it', () => {
    render(<Label className="bock__element_modifier">sample test</Label>);
    const result = screen.getByText(/sample test/);
    expect(result.classList).toContain('bock__element_modifier');
    expect(result.classList).toContain('Label');
  });
});
