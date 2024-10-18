import React from "react"

export default function ProductImage({ cover }: { cover: string }) {
    return (
        <div className="border rounded-lg border-slate-100 p-4 max-h-[300px] lg:w-[900px] lg:max-h-[500px]">
            <img
                src={cover}
                alt=""
                className="w-full h-full object-contain rounded-lg"
            />
        </div>
    )
}
