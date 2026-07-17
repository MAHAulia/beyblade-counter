function render() {

    const app = document.getElementById("app");

    switch (GameState.screen) {

        case "ready":

            app.innerHTML = Screens.ready();

            break;

        case "battle":

            app.innerHTML = Screens.battle();

            break;

    }

}