

export class Hsl {
    private _hue:number;
    private _saturation:number;
    private _lightness:number;


    constructor(hue: number, saturation: number, lightness: number) {

        this._hue = hue>360? 360:hue;
        this._saturation = saturation;
        this.lightness = lightness;
    }

    get hue(): number {
        return Math.trunc(this._hue);
    }

    set hue(value: number) {
        if (value>=0 && value<=360){
            this._hue = value;
        }
    }

    get saturation(): number {
        return Math.trunc(this._saturation);
    }

    set saturation(value: number) {
        if (value>=0 && value<=100){
            this._saturation = value;
        }
    }

    get lightness(): number {
        return Math.trunc(this._lightness);
    }

    set lightness(value: number) {
        if (value >= 0 && value <= 100) {
            this._lightness = value;
        }
    }


    /*    set lightness(value:number){
        if (value<100 && value >=0)
        this.lightness=value;
    }*/

    toString(){
        return `hsl(${this._hue}deg, ${this._saturation}%, ${this._lightness}%)`;

    }


}



/*const color = new Hsl(244, 4, 4);
color.lightness = 2000;*/

/*
const color = new Hsl(244, 4, 4);
color.hue = 4000;*/
/*
const color = new Hsl(244, 4, 4);
color.lightness = 2000
color.setLightness(40);
*/
