import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            // { id: 1, name: 'Холодильники' },
            // { id: 2, name: 'Ноутбуки' },
            // { id: 3, name: 'Телевизоры' },
            // { id: 4, name: 'Смартофоны' }
        ]
        this._brands = [
            // { id: 1, name: 'Samsung' },
            // { id: 2, name: 'Apple' },
            // { id: 3, name: 'Lenovo' },
            // { id: 4, name: 'Asus' },

        ]
        this._devices = [
            // { id: 1, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" },
            // { id: 2, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" },
            // { id: 3, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" },
            // { id: 4, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" },
            // { id: 5, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" },
            // { id: 6, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" },
            // { id: 7, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" },

        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)

    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._count = count
    }
    setLimit(limit) {
        this._limit = limit
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._count
    }
    get limit() {
        return this._limit
    }
}