ready() {

    return `

<div class="screen active">

<div class="hud">

<div class="player left">

<div class="player-body">

<div class="player-name">
${GameState.left.name}
</div>

<div class="avatar">
⚙
</div>

<div class="ready ${GameState.left.ready ? 'active' : ''}">
${GameState.left.ready ? 'READY' : 'TAP READY'}
</div>

</div>

</div>

<div class="center">

<div class="round">
R${GameState.round}
</div>

<div class="vs">
VS
</div>

<button class="start">
START MATCH
</button>

</div>

<div class="player right">

<div class="player-body">

<div class="player-name">
${GameState.right.name}
</div>

<div class="avatar">
⚙
</div>

<div class="ready ${GameState.right.ready ? 'active' : ''}">
${GameState.right.ready ? 'READY' : 'TAP READY'}
</div>

</div>

</div>

</div>

</div>

`;

}