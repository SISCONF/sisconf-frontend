export interface FoodQuantity {
    foodId: number,
    quantity: number,
    quantityType: "KG"
}

export interface Order {
    foodsQuantities: FoodQuantity[]
}