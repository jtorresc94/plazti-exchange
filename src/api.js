const url = "https://api.coincap.io/v2"

// const getAssets = () => {
//     return fetch(`${url}/assets?limit=20`)
//         .then(res => res.json())
//         .then(res => res.data)
// }

const getAssets = async () => {
    try {
        const res = await fetch(`${url}/assets?limit=20`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

// const getAsset = coin => {
//     return fetch(`${url}/assets/${coin}`)
//         .then(res => res.json())
//         .then(res => res.data)
// }

const getAsset = async (coin) => {
    try {
        const res = await fetch(`${url}/assets/${coin}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// const getAssetHistory = coin => {
//     const now = new Date()
//     const end = now.getTime()
//     now.setDate(now.getDate() - 1)
//     const start = now.getTime()

//     return fetch(
//         `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
//     )
//         .then(res => res.json())
//         .then(res => res.data)
// }

const getAssetHistory = async (coin) => {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()

    try {
        const res = await fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
        const data = res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

// const getMarkets = coin => {
//     return fetch(`${url}/assets/${coin}/markets?limit=5`)
//         .then(res => res.json())
//         .then(res => res.data)
// }

const getMarkets = async (coin) => {
    try {
        const res = await fetch(`${url}/assets/${coin}/markets?limit=5`)
        const data = res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
const getExchange = id => {
    return fetch(`${url}/exchanges/${id}`)
        .then(res => res.json())
        .then(res => res.data)
}

export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}