export const getOriginalPrice = (offeredPrice: number, percentage: number) => {
    const discountedPrice = offeredPrice * (100 / (100 - percentage))

    return Math.round(discountedPrice)
}