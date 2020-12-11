const { atom } = require('recoil')


export const menuOpenState = atom({
    key: "menuOpenState",
    default: false
})

export const deviceWidthState = atom({
    key: "deviceWidthState",
    default: null
})