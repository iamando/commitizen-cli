export const formatCommitWithEmojiByType = ({
  type,
  message,
}: {
  type: string
  message: string
}) => {
  const emojiByType: Record<string, any> = {
    feature: '✨',
    bug: '🐛',
    hotfix: '🚑',
    chore: '🛠️',
    epic: '📌',
    design: '🎨',
    experiment: '🧪',
    documentation: '📝',
  }

  return `${emojiByType[type]} ${type}: ${message}`
}
