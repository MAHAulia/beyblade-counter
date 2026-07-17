render();

document.addEventListener("keydown", e => {

    if (e.key == "1") {

        GameState.screen = "ready";
        render();

    }

    if (e.key == "2") {

        GameState.screen = "battle";
        render();

    }

});