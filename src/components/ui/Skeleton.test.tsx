// __tests__/Skeleton.test.tsx

import React from "react"
import { render } from "@testing-library/react"
import { Skeleton } from './skeleton'

describe("Skeleton", () => {
  it("renders with default classes", () => {
    const { container } = render(<Skeleton />)
    const div = container.firstChild as HTMLDivElement

    expect(div).toBeInTheDocument()
    expect(div).toHaveClass("animate-pulse")
    expect(div).toHaveClass("rounded-md")
    expect(div).toHaveClass("bg-primary/10")
  })

  it("applies additional className", () => {
    const { container } = render(<Skeleton className="bg-red" />)
    const div = container.firstChild as HTMLDivElement

    expect(div).toHaveClass("bg-red")
  })

  it("add additional props", () => {
    const { getByTestId } = render(<Skeleton data-testid="skeleton" />)
    expect(getByTestId("skeleton")).toBeInTheDocument()
  })
})
