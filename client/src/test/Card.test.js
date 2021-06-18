import { render, screen } from "@testing-library/react";
import Card from "../Components/Card";

test("Card Test", () => {
  const product = {
    id: 1,
    name: "RealMe Mobile Phone 12Pro",
    imageUrl: "https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/products/16791/lava_0_80.webp",
    description: "RealMe Mobile Phone at $150 only",
    price: "$150.00",
  };
  render(<Card product={product} addToCart={() => console.log("Product Added")} />);
  const productText = screen.getByText(/RealMe Mobile Phone 12Pro/i);
  expect(productText).toBeInTheDocument();
});

test("Card Show Description Test", () => {
  const product = {
    id: 1,
    name: "RealMe Mobile Phone 12Pro",
    imageUrl: "https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/products/16791/lava_0_80.webp",
    description: "RealMe Mobile Phone at $150 only",
    price: "$150.00",
  };
  render(<Card product={product} showDescription addToCart={() => console.log("Product Added")} />);
  const productText = screen.getByText("RealMe Mobile Phone at $150 only");
  expect(productText[0]).toBeInTheDocument();
});
