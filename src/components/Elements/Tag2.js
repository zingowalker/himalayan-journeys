import { cx } from "../../../src/utils";
import Link from "next/link";
import React from "react";

const Tag2 = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "uppercase text-orange-500 dark:text-accentDark font-semibold text-xs sm:text-sm",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag2;
