export default function bs_list(haystack: number[], needle: number): boolean {
  let left = 0
  let right = haystack.length

  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (haystack[middle] === needle) {
      return true
    } else if (needle > haystack[middle]) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return false
}
