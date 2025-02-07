import { Modal, Button, Image, Divider, Flex } from "@mantine/core"
import ProductDetails from "../ProductDetails"
import { useProduct } from "@/hooks/useProduct"
import { useState } from "react"
import ColorSelect from "../ColorSelect"
import QuantitySelector from "../QuantitySelector"
import SelectSize from "../SelectSize"
import Totalizer from "../Totalizer"
import { useCartContext } from "@/contexts/CartContext"

interface AddToCartModalProps {
    opened: boolean
    setOpened: (opened: boolean) => void
    onClose: () => void
    id: string
}

export default function AddToCartModal({
    opened,
    setOpened,
    onClose,
    id,
}: AddToCartModalProps) {
    const { handleAddToCart } = useCartContext()
    const { product } = useProduct(id)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)

    const handleAddToCartClick = () => {
        if (!product) return

        const item = {
            _id: product._id,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            price: product.price,
            subtotal: product.price * quantity,
            cover: product.cover,
            title: product.title,
        }

        handleAddToCart(item)
        setOpened(false)
    }

    if (product) {
        return (
            <Modal
                opened={opened}
                onClose={onClose}
                centered
                size="lg"
                title="Add item to cart"
            >
                <Flex
                    gap={{ base: 0, md: 60 }}
                    direction={{ base: "column", md: "row" }}
                    align="center"
                >
                    <Image
                        src={`../../${product.cover}`}
                        alt={product.title}
                        width={200}
                        mah={{ base: 200, md: 250 }}
                        fit="contain"
                    />

                    <ProductDetails
                        type={product.type}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                        description={product.description}
                    />
                </Flex>

                <Divider my={20} />

                <Flex
                    direction={{ base: "column", sm: "row" }}
                    justify="space-between"
                    align="start"
                    gap={20}
                >
                    <ColorSelect
                        colors={product.colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />

                    <SelectSize
                        sizes={product.sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />

                    <QuantitySelector
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </Flex>

                <Divider my={20} />

                <Totalizer quantity={quantity} price={product.price} />

                <Button
                    mt="md"
                    fullWidth
                    color="pink"
                    disabled={!selectedColor || !selectedSize}
                    onClick={handleAddToCartClick}
                >
                    Continue Shopping
                </Button>
            </Modal>
        )
    }
}
