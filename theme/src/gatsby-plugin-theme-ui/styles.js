import prismPreset from "./prism-preset";

export default {
  root: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: 3
  },
  h1: {
    color: "heading",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 6
  },
  h2: {
    color: "heading",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 5
  },
  h3: {
    color: "heading",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 4
  },
  h4: {
    color: "heading",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 3
  },
  h5: {
    color: "heading",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 2
  },
  h6: {
    color: "heading",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 1
  },
  p: {
    color: "text",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body"
  },
  strong: {
    color: "heading"
  },
  a: {
    color: "primary",
    textDecoration: "none",
    fontWeight: "semibold",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "primary",
    "&&:hover": {
      color: "secondary",
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      borderBottomColor: "secondary"
    }
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit"
    },
    ...prismPreset
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit"
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid"
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid"
  },
  img: {
    maxWidth: "100%"
  }
};
