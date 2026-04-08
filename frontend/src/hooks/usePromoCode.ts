import { useState } from "react"

export const usePromoCode = () => {
    const [promoCode, setPromoCode] = useState({
        code: "",
        discount: 0,
    })
    const [isApplied, setIsApplied] = useState(false)
    const [isValid, setIsValid] = useState(true)

    const validPromoCodes = ["WELCOME10", "ARRIVE10", "DISCOUNT15"]

    function validatePromoCode(code: string) {
        if (!code) return false

        const codeExists = validPromoCodes.includes(code)

        if (!codeExists) {
            setIsApplied(false)
            setIsValid(false)
            return
        }

        setDiscountForPromoCode(promoCode.code)

        setPromoCode((prev) => ({
            ...prev,
            discount: setDiscountForPromoCode(promoCode.code),
        }))
        setIsApplied(true)

        return codeExists
    }

    function setDiscountForPromoCode(code: string) {
        switch (code) {
            case "WELCOME10":
            case "ARRIVE10":
                return 10
            case "DISCOUNT15":
                return 15
            default:
                return 0
        }
    }

    return {
        promoCode,
        setPromoCode,
        validatePromoCode,
        isApplied,
        setIsApplied,
        isValid,
        setIsValid,
    }
}
