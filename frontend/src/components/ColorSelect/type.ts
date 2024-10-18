type Color = string | null

export default interface ColorSelectProps {
    colors: string[]
    selectedColor: Color
    setSelectedColor: (color: Color) => void
}
