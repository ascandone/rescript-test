import { expect, test, vi } from "vitest";
import { Form } from "./Form.gen";
import { render, fireEvent, waitFor } from "@testing-library/react";

test("should work as expected", async () => {
  const INPUT_TEXT = "Hello world";

  const handleSubmit = vi.fn();

  const component = render(<Form onSubmit={handleSubmit} />);

  const input = component.getByPlaceholderText(/Insert a value/);

  fireEvent.change(input, {
    target: { value: INPUT_TEXT },
  });

  fireEvent.submit(input);

  expect(handleSubmit).toHaveBeenCalled();
  expect(handleSubmit).toHaveBeenLastCalledWith(INPUT_TEXT);
});
