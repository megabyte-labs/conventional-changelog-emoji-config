export default {
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  // Test URL: https://regex101.com/r/YxXWi5/11
  headerPattern:
    /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]|🔨|⬆️|🔧|📦|📝|🎉|✨|🚀|🐛|🧐|⏪|🎨|🧪)\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/
}
