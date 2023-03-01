<script lang="ts">
    import actions from "./actions";
    import boards from "./boards";
    let walkingAudio;
    let lickingAudio;
    let victoryAudio;
    let invalidMoveAudio;
    let keyAudio;

    let boardNumber = 0;

    let board = boards[boardNumber];
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
        field: number[];
    }[] = [];

    const move = (direction: "up" | "down" | "left" | "right", delta: number) => {
        const [x, y] = playerPosition;
        let isValid = allPossibleMoves.find((m) => m.direction === direction && m.delta === delta);

        moves = [
            ...moves,
            {
                direction,
                delta,
                isValid,
            },
        ];

        if (!isValid) {
            invalidMoveAudio.play();
            return;
        }

        walkingAudio.play();

        switch (direction) {
            case "up":
                playerPosition[0] = x - delta;
                break;

            case "down":
                playerPosition[0] = x + delta;
                break;
            case "left":
                playerPosition[1] = y - delta;
                break;
            case "right":
                playerPosition[1] = y + delta;
                break;
        }

        const field = board[playerPosition[0]][playerPosition[1]];
        if (field.type === "item") {
            const alreadyCollected = itemsCollected.find(
                (i) => i.field[0] === playerPosition[0] && i.field[1] === playerPosition[1]
            );

            if (alreadyCollected) {
                return;
            }

            if (field.onStep) {
                field.onStep({ board });
                board = [...board];
            }

            if (field.name === "lollipop") {
                lickingAudio.play();
            } else if (field.name === "key") {
                keyAudio.play();
            } else if (field.name === "door") {
                keyAudio.play();
            }

            itemsCollected = [
                ...itemsCollected,
                {
                    name: field.name,
                    field: [...playerPosition],
                },
            ];
        } else if (field.type === "hole") {
            playerPosition = [0, 0];
            itemsCollected = [];
            moves = [];
            board = boards[boardNumber];
        }
        selectedAction = null;
        if (isGameOver()) {
            victoryAudio.play();
            setTimeout(() => {
                alert("Bravo! 🎉🎉🎉🎉🎉🎉");
                moves = [];
                itemsCollected = [];
                playerPosition = [0, 0];
                if (boards[boardNumber + 1]) {
                    boardNumber++;
                    board = boards[boardNumber];
                } else {
                    boardNumber = 0;
                    board = boards[boardNumber];
                }
            }, 1000);
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

    $: allPossibleDirections = [...new Set(allPossibleMoves.map((move) => move.direction))];

    $: totalLollipopsInGame = board.flat().filter((field) => field.name === "lollipop").length;
    console.log({ totalLollipopsInGame });

    const isGameOver = () =>
        totalLollipopsInGame === itemsCollected.filter((i) => i.name === "lollipop").length;

    $: isCollected = (field) => {
        const alreadyCollected = itemsCollected.find(
            (i) => i.field[0] === field[0] && i.field[1] === field[1]
        );
        return !!alreadyCollected;
    };
</script>

<main>
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
                                </div>
                            {:else if !isCollected([i, j])}
                                <img
                                    src={`/${
                                        field.name ||
                                        `${field.type}${
                                            field.attributes?.status
                                                ? `-${field.attributes?.status}`
                                                : ""
                                        }`
                                    }.png`}
                                    class="p-1 w-full h-full"
                                    alt="field"
                                />
                            {/if}
                        </div>
                    {/each}
                {/each}
            </div>
            <div class="flex flex-wrap gap-4 p-2">
                {#each itemsCollected as item}
                    <div>
                        <img src={`/${item.name}.png`} class="w-8 h-8 inline" alt="item" />
                    </div>
                {/each}
            </div>

            <div class="relative w-10 h-10 mx-auto mt-10">
                <div />
                {#if !selectedAction}
                    {#each allPossibleDirections as dir}
                        <div
                            class={`absolute ${dir === "down" ? "top-[100%] left-0 right-0" : ""} ${
                                dir === "right" ? "left-[100%] top-0 bottom-0" : ""
                            } ${dir === "left" ? "right-[100%] top-0 bottom-0" : ""} ${
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
                {/if}
            </div>
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
    <audio src="/footsteps.wav" bind:this={walkingAudio} />
    <audio src="/invalid.mp3" bind:this={invalidMoveAudio} />
    <audio src="/lick.wav" bind:this={lickingAudio} />
    <audio src="/victory.mp3" bind:this={victoryAudio} />
    <audio src="/key.wav" bind:this={keyAudio} />
</main>
