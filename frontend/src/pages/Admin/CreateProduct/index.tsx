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
            const response = await axios.post(
                "http://localhost:3002/create/product",
                product,
            )
            console.log("Produto criado com sucesso:", response.data)
        } catch (error) {
            console.error("Erro ao criar produto:", error)
        }
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

                    <Button variant="filled" color="#d369a0">
                        Save product
                    </Button>
                </div>
            </form>
        </div>
    )
}
