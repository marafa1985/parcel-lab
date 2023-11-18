import { fireEvent, render, screen } from '@testing-library/react';
import { InputWithLabel } from './InputWithLabel';

xdescribe('Input', () => {
  xit('should render the Input', () => {
    render(<InputWithLabel data-testid="sample-input">sample test</InputWithLabel>);
    const result = screen.getByTestId('sample-input');
    expect(result).toBeTruthy();
  });

  xit('should render have a class name Input by default', () => {
    render(<InputWithLabel data-testid="sample-input">sample test</InputWithLabel>);
    const result = screen.getByTestId('sample-input');
    expect(result.classList).toContain('Input');
  });

  xit('should render have a class name when it pass to it', () => {
    render(
      <InputWithLabel data-testid="sample-input" className="bock__element_modifier">
        sample test
      </InputWithLabel>
    );
    const result = screen.getByTestId('sample-input');
    expect(result.classList).toContain('bock__element_modifier');
    expect(result.classList).toContain('Input');
  });

  xit('should render fire click function when Input clicked', () => {
    const clickFn = jest.fn();
    render(
      <InputWithLabel
        data-testid="sample-input"
        onClick={() => clickFn()}
        className="bock__element_modifier"
      >
        sample test
      </InputWithLabel>
    );
    const result = screen.getByTestId('sample-input');
    fireEvent.click(result);
    expect(clickFn).toHaveBeenCalled();
  });
});
