import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Footer from "./Footer";

describe('Footer', () => {
  it('should work as expected', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const text = screen.getByText(/carlos/i);
    expect(text).toBeInTheDocument()
  });
})