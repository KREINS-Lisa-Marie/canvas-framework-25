import {Rectangle} from "./framework25/shapes/Rectangle";
import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/Random";
import {settings} from "./settings";
import {Rgba} from "./framework25/colors/Rgba";
import {Hsl} from "./framework25/colors/Hsl";
import {Triangle} from "./framework25/shapes/Triangle";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

/*const rect1 = new Rectangle(ctx,
    {x: canvas.width / 2, y: canvas.height / 2},
    50,
    100,
    "red");
rect1.draw();

const circle1 = new Circle(
    ctx,
    "pink",
    {x: canvas.width / 2, y: canvas.height / 2},
    50,
);
circle1.draw();*/

/*
const hue = randomInt(0, 360);

for (let i = 0; i < 41; i++) {
    const radius = randomInt(settings.radius.min, settings.radius.max);
    const color: Hsl = new Hsl(hue, randomInt(0, 100), randomInt(0, 100));
    const circle = new Circle(
        ctx,
        color,
        {
            x: randomInt(radius, canvas.width - radius),
            y: randomInt(radius, canvas.height - radius)
        },
        radius
    );
    circle.draw();
}
*/

const hue = randomInt(0, 360);
const color: Hsl = new Hsl(hue, randomInt(0, 100), randomInt(0, 100));
const corners = randomInt(canvas.width, canvas.height);
const triangle = new Triangle(
    ctx,
color,
    {x: canvas.width / 2, y: canvas.height / 2},
    {x1:corners,
        y1:corners,
        x2: corners,
        y2:corners,
        x3:corners,
        y3:corners
    },
);
triangle.draw();