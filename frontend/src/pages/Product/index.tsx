import { useState } from "react"
import { useProduct } from "../../hooks/useProduct"
import { Button, Divider, ActionIcon } from "@mantine/core"
import PageError from "../../components/Error/PageError"
import ProductDetails from "../../components/ProductDetails"
import ColorSelect from "../../components/ColorSelect"
import SelectSize from "../../components/SelectSize"
import { BiHeart } from "react-icons/bi"
import ProductImage from "../../components/ProductImage"
import QuantitySelector from "../../components/QuantitySelector"
import Totalizer from "../../components/Totalizer"

export function Product() {
    const { product } = useProduct()
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)

    if (product) {
        return (
            <div className="flex justify-center p-8">
                <section className="flex flex-col lg:flex-row lg:max-w-[1000px] gap-10">
                    <ProductImage cover={`../../${product.cover}`} />

                    <aside>
                        <ProductDetails
                            type={product.type}
                            title={product.title}
                            rating={product.rating}
                            price={product.price}
                            description={product.description}
                        />

                        <Divider my={20} />

                        <section className="flex justify-between">
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
                        </section>

                        <Divider my={20} />

                        <div className="flex justify-between">
                            <QuantitySelector
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />

                            <Totalizer
                                quantity={quantity}
                                price={product.price}
                            />
                        </div>

                        <div className="flex gap-2 mt-4 items-center">
                            <Button color="pink" size="md" fullWidth>
                                Buy now
                            </Button>

                            <ActionIcon variant="light" size="xl" color="pink">
                                <BiHeart />
                            </ActionIcon>
                        </div>
                    </aside>
                </section>
            </div>
        )
    } else {
        return <PageError />
    }
}
