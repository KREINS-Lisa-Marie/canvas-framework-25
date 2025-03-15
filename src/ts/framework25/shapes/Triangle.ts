import {iPosition} from "../types/iPosition";
import {Shape} from "./Shape";
import {Hsl} from "../colors/Hsl";
import {Rgba} from "../colors/Rgba";
import {iTriangleCorners} from "../types/iTriangleCorners";

export class Triangle extends Shape {


    constructor(ctx: CanvasRenderingContext2D, color: Rgba | Hsl, position: iPosition, corners: iTriangleCorners) {
        super(ctx, color, position, corners);
    }


    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.moveTo(this.corners.x1, this.corners.y1);
        this.ctx.lineTo(this.corners.x2, this.corners.y2);
        this.ctx.lineTo(this.corners.x3, this.corners.y3);
        this.ctx.fill();
        this.ctx.closePath();


    }

}