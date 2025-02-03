import { Modal, Button } from "@mantine/core"
import ProductDetails from "../ProductDetails"
import ProductImage from "../ProductImage"
import { useProduct } from "@/hooks/useProduct"

interface AddToCartModalProps {
    opened: boolean
    setOpened: (opened: boolean) => void
    id: string
}

export default function AddToCartModal({
    opened,
    setOpened,
    id,
}: AddToCartModalProps) {
    const { product } = useProduct(id)

    if (product) {
        return (
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Add item to cart"
            >
                <ProductImage cover={`../../${product.cover}`} />

                <ProductDetails
                    type={product.type}
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                    description={product.description}
                />
                <Button
                    mt="md"
                    fullWidth
                    color="pink"
                    onClick={() => setOpened(false)}
                >
                    Continue Shopping
                </Button>
            </Modal>
        )
    }
}
