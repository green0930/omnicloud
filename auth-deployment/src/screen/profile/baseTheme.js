import normal from './normalTheme'
import dark from './darkTheme'

const themes = {
  normal,
  dark,
}

export default function getTheme(theme) {
  return themes[theme]
}