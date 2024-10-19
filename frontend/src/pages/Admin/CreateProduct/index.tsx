import axios from "axios"
import React, { useState, ChangeEvent, FormEvent } from "react"
import {
    TextInput,
    NativeSelect,
    NumberInput,
    FileInput,
    Textarea,
    Button,
} from "@mantine/core"
import { MdOutlineImage } from "react-icons/md"

interface Product {
    title: string
    category: Categories
    price: number
    cover: File | null
    description: string
    type: Types
}

type Categories = "" | "Women's" | "Winter" | "Men's" | "Shoes" | "Purse"
type Types = "" | "New" | "Hot" | "Offer" | "Promo"

export default function CreateProduct() {
    const [product, setProduct] = useState<Product>({
        title: "",
        category: "",
        price: 0,
        cover: new File([], ""),
        description: "",
        type: "",
    })

    const updatedProductsArray = [
        {
            _id: "67099001c3c7d06a34b350b9",
            title: "Simple T-Shirt Candle High",
            category: "Women's",
            price: 25,
            cover: "src/assets/products/1.png",
            description:
                "Elevate your casual wardrobe with the Simple T-Shirt Candle High. Designed for ultimate comfort and effortless style, this t-shirt combines a modern fit with premium fabric, making it a go-to choice for any occasion. The soft material feels gentle on the skin, ensuring all-day wearability, while the minimalist design offers a versatile look that pairs easily with jeans, shorts, or skirts.",
            type: "New",
            rating: 4.5,
            colors: ["#aac1d6", "#e7a4e9"],
            sizes: ["S", "M", "L"],
            stock: 50,
        },
        {
            _id: "67099001c3c7d06a34b350ba",
            title: "Original T-Shirt Kawaii Cat",
            category: "Women's",
            price: 30,
            cover: "src/assets/products/2.png",
            description:
                "Show off your playful side with the Original T-Shirt Kawaii Cat. Featuring a cute cat graphic, this tee adds a fun, quirky touch to your casual look, perfect for everyday wear.",
            type: "",
            rating: 4.2,
            colors: ["#d0c3bb", "#aac1d6", "#5b7fc7"],
            sizes: ["S", "M"],
            stock: 40,
        },
        {
            _id: "67099001c3c7d06a34b350bb",
            title: "Men's Gourmet Winter Coat",
            category: "Winter",
            price: 130,
            cover: "src/assets/products/3.png",
            description:
                "Stay warm and stylish with the Men's Gourmet Winter Coat. This high-quality coat offers excellent insulation and a sophisticated design, perfect for the colder months.",
            type: "Hot",
            rating: 4.8,
            colors: ["#000000", "#808080"],
            sizes: ["S", "M", "L"],
            stock: 20,
        },
        {
            _id: "67099001c3c7d06a34b350bc",
            title: "Long Sleeve T-Shirt 705 Black",
            category: "Men's",
            price: 34,
            cover: "src/assets/products/4.png",
            description:
                "Sleek and versatile, the Long Sleeve T-Shirt 705 Black is a wardrobe essential. Its minimalist design and comfortable fit make it perfect for any casual occasion.",
            type: "Offer",
            rating: 4.3,
            colors: ["#000000", "#ffffff"],
            sizes: ["S", "L"],
            stock: 35,
        },
        {
            _id: "67099001c3c7d06a34b350bd",
            title: "Women's Gourmet Coat",
            category: "Winter",
            price: 150,
            cover: "src/assets/products/5.png",
            description:
                "Stay warm and stylish with the Women's Gourmet Coat, a premium winter essential. With a sleek design, high-quality materials, and excellent insulation, this coat combines elegance and comfort for the colder months. Available in multiple colors and sizes, it's a must-have for any winter wardrobe.",
            type: "Hot",
            colors: ["#ba8d70", "#dd8492", "#d1bf83"],
            rating: 4.1,
            sizes: ["S", "M", "L"],
            stock: 60,
        },
        {
            _id: "67099001c3c7d06a34b350be",
            title: "Basic White T-Shirt",
            category: "Men's",
            price: 30,
            cover: "src/assets/products/6.png",
            description:
                "The classic Basic White T-Shirt is an everyday staple. Simple yet stylish, this shirt offers unmatched comfort and versatility for any casual outfit.",
            type: "",
            rating: 4.1,
            colors: ["#ffffff"],
            sizes: ["S", "M", "L"],
            stock: 100,
        },
        {
            _id: "67099001c3c7d06a34b350bf",
            title: "Black 705 T-Shirt",
            category: "Men's",
            price: 50,
            cover: "src/assets/products/7.png",
            description:
                "With its clean design and bold color, the Black 705 T-Shirt delivers a cool and casual look. Ideal for pairing with jeans or shorts for effortless style.",
            type: "Offer",
            rating: 4.4,
            colors: ["#000000"],
            sizes: ["M", "L"],
            stock: 75,
        },
        {
            _id: "67099001c3c7d06a34b350c0",
            title: "Women's Long Poncho",
            category: "Winter",
            price: 70,
            cover: "src/assets/products/8.png",
            description:
                "Add elegance to your winter wardrobe with the Women's Long Poncho. This cozy and stylish outerwear piece is perfect for layering during chilly weather.",
            type: "New",
            rating: 4.7,
            colors: ["#dfd4c8", "#d19a9a"],
            sizes: ["S", "M", "L"],
            stock: 50,
        },
        {
            _id: "67099001c3c7d06a34b350c1",
            title: "California 705 T-shirt",
            category: "Men's",
            price: 50,
            cover: "src/assets/products/9.png",
            description:
                "Show your laid-back style with the California 705 T-Shirt. This comfortable, classic tee is perfect for a relaxed, beach-inspired look.",
            type: "New",
            rating: 4.5,
            colors: ["#00000", "#1960b3", "#f7ebeb"],
            sizes: ["S", "M", "L"],
            stock: 80,
        },
        {
            _id: "67099001c3c7d06a34b350c2",
            title: "Men's Warm Denim Jacket",
            category: "Winter",
            price: 100,
            cover: "src/assets/products/10.png",
            description:
                "The Men's Warm Denim Jacket offers both warmth and style. Its rugged look combined with a cozy interior makes it perfect for chilly days.",
            type: "Hot",
            rating: 4.8,
            colors: ["#244077", "#00000"],
            sizes: ["L", "XL"],
            stock: 30,
        },
        {
            _id: "67099001c3c7d06a34b350c3",
            title: "Nike Air Men's Red Sneakers",
            category: "Shoes",
            price: 100,
            cover: "src/assets/products/11.png",
            description:
                "Step up your game with the Nike Air Men's Red Sneakers. These sleek and stylish shoes offer comfort and support, ideal for both casual wear and active days.",
            type: "Promo",
            rating: 4.6,
            colors: ["#ff3a3a"],
            sizes: ["8", "9", "10"],
            stock: 60,
        },
        {
            _id: "67099001c3c7d06a34b350c4",
            title: "Myspring Warm Jacket",
            category: "Winter",
            price: 160,
            cover: "src/assets/products/12.png",
            description:
                "The Myspring Warm Jacket combines fashion and functionality. Its stylish design and superior warmth make it perfect for braving the cold in style.",
            type: "New",
            rating: 4.9,
            colors: ["#ad634a", "#898989", "#000000"],
            sizes: ["M", "L"],
            stock: 40,
        },
        {
            _id: "67099001c3c7d06a34b350c5",
            title: "Formal Men's Blazer",
            category: "Men's",
            price: 180,
            cover: "src/assets/products/13.png",
            description:
                "Make an impression with the Formal Men's Blazer. This sleek, tailored blazer is perfect for formal events, adding a touch of sophistication to any outfit.",
            type: "New",
            rating: 4.7,
            colors: ["#000000", "#000080"],
            sizes: ["M", "L"],
            stock: 25,
        },
        {
            _id: "67099001c3c7d06a34b350c6",
            title: "Nike Air Men's Shoes",
            category: "Shoes",
            price: 200,
            cover: "src/assets/products/14.png",
            description:
                "The Nike Air Men's Shoes deliver premium comfort and style. Designed for versatility, they are ideal for casual wear or active lifestyles.",
            type: "Hot",
            rating: 4.8,
            colors: ["#00000", "#ffffff"],
            sizes: ["8", "9", "10", "11"],
            stock: 45,
        },
        {
            _id: "67099001c3c7d06a34b350c7",
            title: "Gucci Colorful Trend Bag",
            category: "Purse",
            price: 90,
            cover: "src/assets/products/15.png",
            description:
                "The Gucci Colorful Trend Bag adds a bold pop of color to any outfit. Its stylish design and vibrant hues make it a must-have accessory for fashion-forward individuals.",
            type: "Hot",
            rating: 4.7,
            colors: ["#ff3a3a", "Green"],
            sizes: [],
            stock: 10,
        },
    ]

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value,
        })
    }

    const handleNumberChange = (value: number | string, name: string) => {
        setProduct({
            ...product,
            [name]: value ?? 0,
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.put(
                "http://localhost:3002/update/products",
                updatedProductsArray,
            )
            console.log("Produtos editados com sucesso:", response.data)
        } catch (error) {
            console.error("Erro ao editar produtos:", error)
        }

        // try {
        //     const response = await axios.post(
        //         "http://localhost:3002/create/product",
        //         product,
        //     )
        //     console.log("Produto criado com sucesso:", response.data)
        // } catch (error) {
        //     console.error("Erro ao criar produto:", error)
        // }
    }

    return (
        <div className="max-w-6xl py-8 px-10">
            <h1 className="text-3xl font-bold mb-4">Create Product</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <TextInput
                    label="Title"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                    required
                />
                <NativeSelect
                    label="Category"
                    name="category"
                    value={product.category}
                    data={["", "Women's", "Winter", "Men's", "Shoes", "Purse"]}
                    onChange={handleChange}
                    required
                />
                <NumberInput
                    label="Price"
                    name="price"
                    placeholder="Dollars"
                    prefix="$"
                    value={product.price}
                    onChange={(value) => handleNumberChange(value, "price")}
                    required
                />
                <FileInput
                    leftSection={<MdOutlineImage width={15} height={15} />}
                    label="Cover"
                    leftSectionPointerEvents="none"
                    accept="image/png,image/jpeg"
                    value={product.cover}
                    description="Accpeted formats: png, jpeg"
                    onChange={(event) =>
                        setProduct({ ...product, cover: event })
                    }
                    clearable
                    required
                />
                <Textarea
                    label="Description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                />
                <NativeSelect
                    label="Types"
                    name="type"
                    value={product.type}
                    data={["", "New", "Hot", "Offer", "Promo"]}
                    onChange={handleChange}
                    required
                />

                <div className="flex justify-between mt-4">
                    <Button variant="default">Cancel</Button>

                    <Button
                        variant="filled"
                        color="#d369a0"
                        onClick={handleSubmit}
                    >
                        Save product
                    </Button>
                </div>
            </form>
        </div>
    )
}
