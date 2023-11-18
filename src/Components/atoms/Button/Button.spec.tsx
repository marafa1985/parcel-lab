import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render the Button', () => {
    render(<Button>sample test</Button>);
    const result = screen.getByText(/sample test/);
    expect(result).toBeTruthy();
  });

  xit('should render have a class name Button by default', () => {
    render(<Button>sample test</Button>);
    const result = screen.getByText(/sample test/);
    expect(result.classList).toContain('Button');
  });

  xit('should render have a class name when it pass to it', () => {
    render(<Button className="bock__element_modifier">sample test</Button>);
    const result = screen.getByText(/sample test/);
    expect(result.classList).toContain('bock__element_modifier');
    expect(result.classList).toContain('Button');
  });

  it('should render fire click function when button clicked', () => {
    const clickFn = jest.fn();
    render(
      <Button onClick={() => clickFn()} className="bock__element_modifier">
        sample test
      </Button>
    );
    const result = screen.getByText(/sample test/);
    fireEvent.click(result);
    expect(clickFn).toHaveBeenCalled();
  });
});
