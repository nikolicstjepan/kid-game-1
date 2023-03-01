export type Field = {
    userCanStep: boolean;
    userCanJumpOver: boolean;
    type: "grass" | "wall" | "secret" | "rock" | "item" | "door" | "hole";
    bgColor: string;
    onStep?: ({ board }: { board?: Field[][]; boardNumber?: number }) => void;
    name?: string;
    attributes?: any;
};
