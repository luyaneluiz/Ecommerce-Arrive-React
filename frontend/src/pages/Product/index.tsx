import { useState } from "react"
import { useProduct } from "../../hooks/useProduct"
import { Button, Divider, ActionIcon, Image, Flex, Stack } from "@mantine/core"
import PageError from "../../components/Error/PageError"
import ProductDetails from "../../components/ProductDetails"
import ColorSelect from "../../components/ColorSelect"
import SelectSize from "../../components/SelectSize"
import { BiHeart } from "react-icons/bi"
import QuantitySelector from "../../components/QuantitySelector"
import Totalizer from "../../components/Totalizer"
import LoadingPage from "@/components/LoadingPage"
import Recommendations from "../../components/Recommendations"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { useCartContext } from "@/contexts/CartContext"

export function Product() {
    const { user } = useAuth()
    const userId = user?._id || null
    const navigate = useNavigate()
    const { handleAddToCart } = useCartContext()
    const { product, loading } = useProduct()
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)

    if (loading) return <LoadingPage />

    if (!product) return <PageError />

    const handleBuyNowClick = () => {
        if (!userId) return navigate("/auth")

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
        navigate("/cart")
    }

    return (
        <Flex direction="column" justify="center" gap={45} p={32}>
            <Flex
                direction={{ base: "column", lg: "row" }}
                gap={40}
                maw={900}
                align="center"
            >
                <Image
                    src={`../../${product.cover}`}
                    alt={product.title}
                    w={{ base: 300, md: 400 }}
                    h={{ base: 300, md: 400 }}
                    fit="contain"
                />

                <Stack gap={20}>
                    <ProductDetails
                        type={product.type}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                        description={product.description}
                    />

                    <Divider />

                    <Flex justify="space-between" align="center">
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
                    </Flex>

                    <Divider />

                    <Flex
                        justify="space-between"
                        direction={{ base: "column", sm: "row" }}
                        align={{ base: "normal", sm: "center" }}
                        gap={10}
                    >
                        <QuantitySelector
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />

                        <Totalizer quantity={quantity} price={product.price} />
                    </Flex>

                    <Flex align="center" gap={8}>
                        <Button
                            color="pink"
                            size="md"
                            disabled={!selectedColor || !selectedSize}
                            onClick={handleBuyNowClick}
                            fullWidth
                        >
                            Buy now
                        </Button>

                        <ActionIcon variant="light" size="xl" color="pink">
                            <BiHeart />
                        </ActionIcon>
                    </Flex>
                </Stack>
            </Flex>

            <Recommendations />
        </Flex>
    )
}
