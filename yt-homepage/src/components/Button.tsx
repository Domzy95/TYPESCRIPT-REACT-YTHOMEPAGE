import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
//!ustvari array classov ki ga bo uporabljov vsak button
const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-gray-200", "hover:bg-gray-300"], // Changed to grey background
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "justify-center",
        "items-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

//!vzame stile buttonov ki smo jih naredili! component props omogoča da dodamo navadne button propse custom made propsom!
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props} //!z tailwind merge omogočamo da overrajtamo custom made style za buttone in dodamo svoje z oznako classname
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
//! ...props omogoča da button sprejme tudi ostale propse ki niso v buttonStyles
//!za stylat button uporabljamo npm i class variance authority z tailwind merge
//!ker želimo imeti različne stile gumbov
