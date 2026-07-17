render();

document.addEventListener("keydown", e => {


    switch (e.key.toLowerCase()) {

        case "1":
            GameState.screen = "ready";
            render();
            break;
        case "2":
            GameState.screen = "battle";
            render();
            break;
        case "a":
            GameState.left.ready = !GameState.left.ready;
            render();
            break;

        case "l":
            GameState.right.ready = !GameState.right.ready;
            render();
            break;

        case " ":
            if (GameState.left.ready && GameState.right.ready) {
                GameState.screen = "battle";
                render();
            }
            break;
    }

});
