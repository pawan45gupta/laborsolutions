import { render, screen } from "@testing-library/react";
import Popper from "../Components/Popper";

test("Popper Test", () => {
  const product = {
    id: 1,
    name: "RealMe Mobile Phone 12Pro",
    imageUrl: "https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/products/16791/lava_0_80.webp",
    description: "RealMe Mobile Phone at $150 only",
    price: "$150.00",
  };
  render(<Popper product={product} addToCart={() => console.log("Product Added")} />);
  const productText = screen.getByText(/RealMe Mobile Phone 12Pro/i);
  expect(productText).toBeInTheDocument();
});
