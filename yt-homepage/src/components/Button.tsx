import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
//!ustvari array classov ki ga bo uporabljov vsak button
const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
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
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

//!vzame stile buttonov ki smo jih naredili! component props omogoča da dodamo navadne button propse custom made propsom!
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
export function Button({ variant, size, ...props }: ButtonProps) {
  return <button {...props} className={buttonStyles({ variant, size })} />;
}
//! ...props omogoča da button sprejme tudi ostale propse ki niso v buttonStyles
//!za stylat button uporabljamo npm i class variance authority
//!ker želimo imeti različne stile gumbov
