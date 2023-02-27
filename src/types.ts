export type Field = {
    userCanStep: boolean;
    userCanJumpOver: boolean;
    type: "grass" | "wall" | "secret" | "rock";
    bgColor: string;
    onStep?: () => void;
};
