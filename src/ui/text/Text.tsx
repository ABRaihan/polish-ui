import { classNames } from "@utils";
import React from "react";
import { TextProps } from "./TextPropsType";
import style from "./text.module.scss";

const Text: React.FC<TextProps> = ({
  type = "paragraph",
  paragraphAs = "lg",
  spanAs = "lg",
  linkAs = "lg",
  url,
  target = "_blank",
  hover,
  headingAs = "h1",
  color,
  truncate,
  textDecoration = "default",
  children,
  textAlign = "start",
  fontWeight,
}) => {
  const paragraph = classNames(
    style.paragraph,
    style["font_" + paragraphAs],
    style[color],
    style[textAlign],
    style[textDecoration],
    style[fontWeight],
    { [style["truncate"]]: truncate }
  );
  const span = classNames(
    style.span,
    style["font_" + spanAs],
    style[color],
    style[textAlign],
    style[textDecoration],
    style[fontWeight],
    { [style["truncate"]]: truncate }
  );
  const link = classNames(
    style.link,
    { [style["hover"]]: hover },
    style["font_" + linkAs],
    style[color],
    style[textAlign],
    style[textDecoration],
    style[fontWeight],
    { [style["truncate"]]: truncate }
  );
  const heading = classNames(
    style[headingAs],
    style[color],
    style[textAlign],
    style[textDecoration],
    style[fontWeight],
    { [style["truncate"]]: truncate }
  );

  if (type === "paragraph") {
    if (paragraphAs === "sm") return <p className={paragraph}>{children}</p>;
    if (paragraphAs === "md") return <p className={paragraph}>{children}</p>;
    if (paragraphAs === "lg") return <p className={paragraph}>{children}</p>;
  }
  if (type === "span") {
    if (spanAs === "sm") return <span className={span}>{children}</span>;
    if (spanAs === "md") return <span className={span}>{children}</span>;
    if (spanAs === "lg") return <span className={span}>{children}</span>;
  }
  if (type === "link") {
    if (linkAs === "sm")
      return (
        <a href={url} target={target} className={link}>
          {" "}
          {children}
        </a>
      );
    if (linkAs === "md")
      return (
        <a href={url} target={target} className={link}>
          {" "}
          {children}{" "}
        </a>
      );
    if (linkAs === "lg")
      return (
        <a href={url} target={target} className={link}>
          {" "}
          {children}
        </a>
      );
  }

  if (type === "heading") {
    if (headingAs === "h1") return <h1 className={heading}>{children}</h1>;
    if (headingAs === "h2") return <h2 className={heading}>{children}</h2>;
    if (headingAs === "h3") return <h3 className={heading}>{children}</h3>;
    if (headingAs === "h4") return <h4 className={heading}>{children}</h4>;
    if (headingAs === "h5") return <h5 className={heading}>{children}</h5>;
    if (headingAs === "h6") return <h6 className={heading}>{children}</h6>;
  }
  return null;
};
export default Text;
