import type { Field } from "./types";

const grassField: Field = {
    userCanStep: true,
    userCanJumpOver: false,
    type: "grass",
    bgColor: "bg-green-700",
};

const wallField: Field = {
    userCanStep: false,
    userCanJumpOver: false,
    type: "wall",
    bgColor: "bg-gray-700",
};

const rockField: Field = {
    userCanStep: false,
    userCanJumpOver: true,
    type: "rock",
    bgColor: "bg-gray-400",
};

const secretField: Field = {
    userCanStep: true,
    userCanJumpOver: false,
    type: "secret",
    onStep: () => {
        console.log("You found a secret!");
    },
    bgColor: "bg-yellow-300",
};

const lollipopField: Field = {
    userCanStep: true,
    userCanJumpOver: false,
    type: "item",
    name: "lollipop",
    bgColor: "bg-blue-100",
};

const keyField: Field = {
    userCanStep: true,
    userCanJumpOver: false,
    type: "item",
    name: "key",
    bgColor: "bg-blue-100",
};

export default [
    [
        [
            grassField,
            lollipopField,
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            wallField,
            wallField,
            rockField,
        ],
        [
            grassField,
            lollipopField,
            grassField,
            grassField,
            grassField,
            wallField,
            grassField,
            grassField,
            rockField,
            grassField,
        ],
        [
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            wallField,
            grassField,
            grassField,
            lollipopField,
            grassField,
        ],
        [
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            grassField,
        ],
        [
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            wallField,
            grassField,
            grassField,
            keyField,
            grassField,
        ],
        [
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            grassField,
        ],
        [
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            grassField,
        ],
        [
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            wallField,
            grassField,
            grassField,
            grassField,
            grassField,
        ],
        [
            grassField,
            grassField,
            grassField,
            grassField,
            grassField,
            grassField,
            grassField,
            grassField,
            grassField,
            grassField,
        ],
        [
            grassField,
            grassField,
            grassField,
            secretField,
            grassField,
            grassField,
            grassField,
            grassField,
            grassField,
            secretField,
        ],
    ],
];
