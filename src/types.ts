export type Field = {
    userCanStep: boolean;
    userCanJumpOver: boolean;
    type: "grass" | "wall" | "secret" | "rock" | "item" | "door";
    bgColor: string;
    onStep?: ({ board }: { board?: Field[][] }) => void;
    name?: string;
    attributes?: any;
};
