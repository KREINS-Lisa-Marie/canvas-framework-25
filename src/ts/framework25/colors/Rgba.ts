export class Rgba{
    private _red:number;
    private _green:number;
    private _blue:number;
    private _alpha:number;

// to do: validate values

    constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }


    get red(): number {
        return Math.trunc(this._red);
    }

    set red(value: number) {
        if (value>=0 && value <=255){
            this._red = value;
        }
    }

    get green(): number {
        return Math.trunc(this._green);
    }

    set green(value: number) {
        if (value>=0 && value <=255){
            this._green = value;
        }
    }

    get blue(): number {
        return Math.trunc(this._blue);
    }

    set blue(value: number) {
        if (value>=0 && value <=255){
            this._blue = value;
        }

    }

    get alpha(): number {
        return this._alpha;
    }

    set alpha(value: number) {
        if (value>=0 && value <=1){
            this._alpha = value;
        }
    }

    toString(){
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
}