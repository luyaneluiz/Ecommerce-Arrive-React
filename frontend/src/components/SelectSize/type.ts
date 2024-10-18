import Sizes from "../../types/Sizes"

export default interface SelectSizeProps {
    sizes: Sizes[]
    selectedSize: string | null
    setSelectedSize: (size: string) => void
}
