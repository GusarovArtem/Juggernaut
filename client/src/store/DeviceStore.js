import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [

        ]
        this._brands = [

        ]
        this._devices = [

        ]
        makeAutoObservable(this)
    }


    get types() {
        return this._types;
    }

    set types(value) {
        this._types = value;
    }

    get brands() {
        return this._brands;
    }

    set brands(value) {
        this._brands = value;
    }

    get devices() {
        return this._devices;
    }

    set devices(value) {
        this._devices = value;
    }
}