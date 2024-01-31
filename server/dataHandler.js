let storedData = []

export function storeData(data) {
    storedData = []
    storedData.push(data)
}

export function getData() {
    return storedData
}