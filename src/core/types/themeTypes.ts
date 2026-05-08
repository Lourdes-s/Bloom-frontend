export type ThemeColors = {
    primary: string
    primaryLight: string
    primaryDark: string
    background: string
    surface: string
    text: string
    textMuted: string
}

export type Theme = {
    id: string
    name: string
    colors: ThemeColors
}