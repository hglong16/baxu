import { withoutNulls } from "./utils/arrays";

export const DOM_TYPES = {
  TEXT: "text",
  ELEMENT: "element",
  FRAGMENT: "fragment",
};

export function h(tag, props = {}, children = {}) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  };
}

function mapTextNodes(children) {
  return children.map((child) =>
    typeof child === "string" ? hString(child) : child
  );
}

export function hString(str) {
  return {
    text: str,
    type: DOM_TYPES.TEXT,
  };
}

export function hFragment(vNodes) {
  return {
    children: mapTextNodes(withoutNulls(vNodes)),
    type: DOM_TYPES.FRAGMENT,
  };
}
