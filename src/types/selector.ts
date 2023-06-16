import { Attribute } from "./attribute"
import Matcher from "./matcher"

/**
 * if value is a string it acts as the `[attribute]` selector meaning that it will target all elements that just have that attribute
 */
type Selector =
  | Attribute
  | [attribute: Attribute, matcher: Matcher, value: string]
export default Selector
