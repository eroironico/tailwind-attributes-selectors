/**
 * - = : equals
 * - ~= : contains
 * - |= : starts with (note: value has to be a whole word, either alone, like lang="en", or followed by a hyphen)
 * - ^= : starts with (note: value can be anything)
 * - $= : ends with
 * - *= : contains
 */
type Matcher = "=" | "~=" | "|=" | "^=" | "$=" | "*="
export default Matcher
