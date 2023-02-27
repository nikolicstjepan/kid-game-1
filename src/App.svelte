<script lang="ts">
    import actions from "./actions";
    import boards from "./boards";

    const board = boards[0];
    let playerPosition = [0, 0];

    let selectedAction: {
        action: string;
        direction: "up" | "down" | "left" | "right";
    };

    const arrows = {
        up: "⬆️",
        down: "⬇️",
        left: "⬅️",
        right: "➡️",
    };

    let moves: {
        direction: "up" | "down" | "left" | "right";
        delta: number;
        isValid: boolean;
    }[] = [];

    let itemsCollected: {
        name: string;
        count: number;
        field: number[];
    }[] = [];

    const move = (direction: "up" | "down" | "left" | "right", delta: number) => {
        const [x, y] = playerPosition;
        let isValid = false;
        switch (direction) {
            case "up": {
                isValid = x > 0 && x - delta >= 0;
                playerPosition[0] = isValid ? x - delta : x;
                playerPosition[1] = y;
                break;
            }
            case "down": {
                isValid = x < board.length - 1 && x + delta < board.length;
                playerPosition[0] = isValid ? x + delta : x;
                playerPosition[1] = y;
                break;
            }
            case "left": {
                isValid = y > 0 && y - delta >= 0;
                playerPosition[0] = x;
                playerPosition[1] = isValid ? y - delta : y;
                break;
            }
            case "right": {
                isValid = y < board[0].length - 1 && y + delta < board[0].length;
                playerPosition[0] = x;
                playerPosition[1] = isValid ? y + delta : y;
                break;
            }
        }
        moves = [
            ...moves,
            {
                direction,
                delta,
                isValid,
            },
        ];
        const field = board[playerPosition[0]][playerPosition[1]];
        if (field.onStep) {
            field.onStep();
        }
        if (field.type === "item") {
            console.log({ field });
            const alreadyCollected = itemsCollected.find(
                (i) => i.field[0] === playerPosition[0] && i.field[1] === playerPosition[1]
            );

            console.log({ alreadyCollected });
            if (alreadyCollected) {
                return;
            }

            const itemIndex = itemsCollected.findIndex((i) => i.name === field.name);

            if (itemIndex > -1) {
                const newItemsCollected = [...itemsCollected];
                const item = itemsCollected[itemIndex];
                item.count++;

                newItemsCollected[itemIndex] = item;
                itemsCollected = newItemsCollected;
            } else {
                itemsCollected = [
                    ...itemsCollected,
                    {
                        name: field.name,
                        count: 1,
                        field: [...playerPosition],
                    },
                ];
                console.log({ itemsCollected });
            }
        }
        selectedAction = null;
    };

    $: allPossibleMoves = actions
        .map((action) => {
            const [x, y] = playerPosition;
            const possibleMoves = [];
            switch (action.direction) {
                case "up":
                    for (let i = 1; i <= x; i++) {
                        const field = board[x - i][y];
                        if (field?.userCanStep) {
                            possibleMoves.push({
                                ...action,
                                delta: i,
                            });
                        } else if (field?.userCanJumpOver) {
                            continue;
                        } else {
                            break;
                        }
                    }
                    break;
                case "down":
                    for (let i = 1; i <= board.length - 1 - x; i++) {
                        const field = board[x + i][y];
                        if (field?.userCanStep) {
                            possibleMoves.push({
                                ...action,
                                delta: i,
                            });
                        } else if (field?.userCanJumpOver) {
                            continue;
                        } else {
                            break;
                        }
                    }
                    break;
                case "left":
                    for (let i = 1; i <= y; i++) {
                        const field = board[x][y - i];
                        if (field?.userCanStep) {
                            possibleMoves.push({
                                ...action,
                                delta: i,
                            });
                        } else if (field?.userCanJumpOver) {
                            continue;
                        } else {
                            break;
                        }
                    }
                    break;
                case "right":
                    for (let i = 1; i <= board[0].length - 1 - y; i++) {
                        const field = board[x][y + i];
                        if (field?.userCanStep) {
                            possibleMoves.push({
                                ...action,
                                delta: i,
                            });
                        } else if (field?.userCanJumpOver) {
                            continue;
                        } else {
                            break;
                        }
                    }
                    break;
            }
            return possibleMoves;
        })
        .flat();

    $: stepsAllowedForSelectedAction = allPossibleMoves.filter(
        (move) => move.direction === selectedAction?.direction
    );
    $: allPossibleDirections = [...new Set(allPossibleMoves.map((move) => move.direction))];
</script>

<main>
    <!-- <pre>{JSON.stringify(itemsCollected, null, 4)}</pre> -->
    <div class="">
        <div class="p-4 pt-16">
            <div
                class="grid justify-center grid-cols-[repeat(10,68px)] grid-rows-[repeat(10,68px)]"
            >
                {#each board as row, i}
                    {#each row as field, j}
                        <div class={`border ${field.bgColor}`}>
                            {#if playerPosition[0] === i && playerPosition[1] === j}
                                <div class="relative">
                                    <img src="/user.png" width="100%" class="p-1" alt="user" />
                                    {#each allPossibleDirections as dir}
                                        <div
                                            class={`absolute ${
                                                dir === "down" ? "top-[100%] left-0 right-0" : ""
                                            } ${
                                                dir === "right" ? "left-[100%] top-0 bottom-0" : ""
                                            } ${
                                                dir === "left" ? "right-[100%] top-0 bottom-0" : ""
                                            } ${
                                                dir === "up" ? "bottom-[100%] left-0 right-0" : ""
                                            } grid place-items-center`}
                                        >
                                            <button
                                                on:click={() =>
                                                    (selectedAction = {
                                                        action: "move",
                                                        direction: dir,
                                                    })}
                                                class="text-3xl font-bold cursor-pointer"
                                            >
                                                {arrows[dir]}
                                            </button>
                                        </div>
                                    {/each}
                                </div>
                            {:else}
                                <img
                                    src={`/${field.name || field.type}.png`}
                                    class="p-1 w-full h-full"
                                    alt="field"
                                />
                            {/if}
                        </div>
                    {/each}
                {/each}
            </div>
            <!--  <div class="flex flex-col max-h-32 flex-wrap gap-4 p-2">
                {#each moves as move, i}
                    <div>
                        {i + 1}. {arrows[move.direction]} | {move.delta}
                    </div>
                {/each}
            </div> -->
            {#if selectedAction}
                <div class="fixed bottom-0 left-0 right-0 p-1">
                    <div class="text-center text-4xl p-2">{arrows[selectedAction.direction]}</div>
                    <div class="grid grid-cols-9 gap-1 mt-4 justify-center">
                        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as step}
                            <button
                                class={"border p-1 text-6xl disabled:text-gray-400"}
                                on:click={() => move(selectedAction.direction, step)}
                            >
                                {step}
                            </button>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</main>
