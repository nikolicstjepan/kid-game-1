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

    const move = (direction: "up" | "down" | "left" | "right", delta: number) => {
        const [x, y] = playerPosition;
        switch (direction) {
            case "up":
                playerPosition[0] = x > 0 && x - delta >= 0 ? x - delta : x;
                playerPosition[1] = y;
                break;
            case "down":
                playerPosition[0] =
                    x < board.length - 1 && x + delta < board.length ? x + delta : x;
                playerPosition[1] = y;
                break;
            case "left":
                playerPosition[0] = x;
                playerPosition[1] = y > 0 && y - delta >= 0 ? y - delta : y;
                break;
            case "right":
                playerPosition[0] = x;
                playerPosition[1] =
                    y < board[0].length - 1 && y + delta < board[0].length ? y + delta : y;
                break;
        }
        const filed = board[playerPosition[0]][playerPosition[1]];
        if (filed.onStep) {
            filed.onStep();
        }
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
                        if (board[x + i][y].userCanStep) {
                            possibleMoves.push({
                                ...action,
                                delta: i,
                            });
                        } else {
                            break;
                        }
                    }
                    break;
                case "left":
                    for (let i = 1; i <= y; i++) {
                        if (board[x][y - i].userCanStep) {
                            possibleMoves.push({
                                ...action,
                                delta: i,
                            });
                        } else {
                            break;
                        }
                    }
                    break;
                case "right":
                    for (let i = 1; i <= board[0].length - 1 - y; i++) {
                        if (board[x][y + i].userCanStep) {
                            possibleMoves.push({
                                ...action,
                                delta: i,
                            });
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
</script>

<main>
    <div class="grid grid-cols-2 gap-2">
        <div class="border-r min-h-screen grid items-center">
            <div
                class="grid justify-center grid-cols-[repeat(10,48px)] grid-rows-[repeat(10,48px)]"
            >
                {#each board as row, i}
                    {#each row as field, j}
                        <div class={`border ${field.bgColor}`}>
                            {#if playerPosition[0] === i && playerPosition[1] === j}
                                <img src="/user.png" class="p-1" alt="user" />
                            {/if}
                        </div>
                    {/each}
                {/each}
            </div>
        </div>
        <div>
            <div class="border-r min-h-screen grid items-center">
                <div class="grid justify-center">
                    <div class="grid grid-cols-4 gap-2">
                        {#each actions as action}
                            <button
                                class={`text-4xl ${
                                    selectedAction && selectedAction.direction === action.direction
                                        ? "text-6xl"
                                        : ""
                                }`}
                                on:click={() => (selectedAction = action)}
                            >
                                {arrows[action.direction]}
                            </button>
                        {/each}
                    </div>
                    <div class="grid grid-cols-4 gap-1 mt-4 justify-center">
                        {#each stepsAllowedForSelectedAction.map((s) => s.delta) as step}
                            <button
                                class={"border text-4xl disabled:text-gray-400"}
                                disabled={!selectedAction}
                                on:click={() => move(selectedAction.direction, step)}
                            >
                                {step}
                            </button>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
