export type Field = {
    userCanStep: boolean;
    userCanJumpOver: boolean;
    type: "grass" | "wall" | "secret" | "rock" | "item";
    bgColor: string;
    onStep?: () => void;
    name?: string;
};
