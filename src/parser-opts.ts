export default {
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  // Test URL: https://regex101.com/r/YxXWi5/11
  headerPattern:
    /^(?::\w*:|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?!\s).)\s?(?<ticket>#\d*)?$/
}
