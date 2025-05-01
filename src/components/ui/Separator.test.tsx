import { render } from "@testing-library/react"
import { Separator } from "@/components/ui/separator"

describe("Separator", () => {
  it("renders a horizontal separator by default", () => {
    const { container } = render(<Separator />)
    const separator = container.firstChild as HTMLElement

    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass("w-full h-[1px]")
  })

  it("renders a vertical separator if orientation is vertical", () => {
    const { container } = render(<Separator orientation="vertical" />)
    const separator = container.firstChild as HTMLElement

    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass("h-full w-[1px]")
  })

  it("applies custom className", () => {
    const { container } = render(<Separator className="bg-slate-400" />)
    const separator = container.firstChild as HTMLElement

    expect(separator).toHaveClass("bg-slate-400")
  })
})
