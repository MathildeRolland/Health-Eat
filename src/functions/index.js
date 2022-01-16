
export const retrieveFirstSentence = (string) => {
    const splittedSentence = string.split(".");
    return `${splittedSentence[0]}.${splittedSentence[1]}.`;
}

export const getRandomPrice = (min, max) => {
    const price = Number((Math.random() * (max - min + 1) + min).toFixed(2));
    return price;
}

export const calcTotalPriceHT = (basket) => {
    let total = 0;
    basket.forEach(meal => total += meal.totalPrice);
    return total;
}