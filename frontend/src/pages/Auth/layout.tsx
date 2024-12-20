import React from "react"

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
    return (
        <div className="bg-slate-600">
            <h1>{children}</h1>
        </div>
    )
}
