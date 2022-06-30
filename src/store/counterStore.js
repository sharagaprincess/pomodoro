import { makeAutoObservable } from "mobx";

export default class counterStore {
    constructor(){
        this._counter = 25;
        this._minutes = 25;
        this._seconds = 0;
        this._isResume = false;
        this._isBreak = false;
        this._break = 5;
        makeAutoObservable(this)
    }

    setCounter(counter){
        this._counter = counter
    }

    setIsResume(val){
        this._isResume = val
    }

    setMinutes(min){
        this._minutes = min
    }

    setSeconds(sec){
        this._seconds = sec
    }

    setIsBreak(val){
        this._isBreak = val
    }

    setBreak(val){
        this._break = val
    }

    get counter(){
        return this._counter
    }

    get isResume() {
        return this._isResume
    }

    get minutes(){
        return this._minutes
    }

    get seconds(){
        return this._seconds
    }

    get isBreak(){
        return this._isBreak
    }

    get break(){
        return this._break
    }
}