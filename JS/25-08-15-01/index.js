var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
// function walk(date: Direction) {
//     if (date === Direction.UP) {
//         console.log("Walking up");
//     } else if (date === Direction.DOWN) {
//         console.log("Walking down");
//     } else if (date === Direction.LEFT) {
//         console.log("Walking left");
//     } else if (date === Direction.RIGHT) {
//         console.log("Walking right");
//     }
// }
// console.log(Direction.UP); // Output: 0
// console.log(Direction[0]); // Output: UP
console.log(Direction.UP);
export {};
//# sourceMappingURL=index.js.map