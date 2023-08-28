import React from "react";
export interface TextProps {
    type: "paragraph" | "span" | "link" | "heading";
    paragraphAs: "sm" | "md" | "lg";
    spanAs: "sm" | "md" | "lg";
    linkAs: "sm" | "md" | "lg";
    target?: "_blank" | "_self" | "_parent" | "_top";
    url?: string;
    hover: boolean;
    headingAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    color: "primary" | "secondary" | "tertiary" | "subdued";
    truncate: boolean;
    textDecoration:| "default"| "line_through"| "underline"| "overline"| "overline_underline_both";
    children: React.ReactNode;
    textAlign: "start" | "center" | "end" | "justify";
    fontWeight: "regular" | "medium" | "semiBold" | "bold";
}