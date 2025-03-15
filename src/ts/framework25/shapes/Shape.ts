import {iPosition} from "../types/iPosition";
import {iTriangleCorners} from "../types/iTriangleCorners"
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";


export abstract class Shape {       // class qu'on peut ≠ utiliser = une étape avant
    ctx:CanvasRenderingContext2D;
    color:Rgba | Hsl;
    position:iPosition;
    corners:iTriangleCorners;


    constructor(ctx: CanvasRenderingContext2D, color: Rgba | Hsl, position: iPosition, corners: iTriangleCorners) {
        this.ctx = ctx;
        this.color = color;
        this.position = position;
        this.corners = corners;
    }

    /*    constructor(ctx: CanvasRenderingContext2D, color: Rgba |Hsl, position: iPosition) {
        this.ctx = ctx;
        this.color = color;
        this.position = position;
    }*/
}