namespace SpriteKind {
    export const TrafficLight = SpriteKind.create()
}
function change_traffic_light () {
    if (game.runtime() >= 3000) {
        traffic_light.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            `)
    }
}
function make_grön () {
    grön = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    grön,
    [img`
        . . . . 6 6 6 6 6 . . . . . . . 
        . . . 6 7 7 7 7 7 6 6 . . . . . 
        . . 6 7 7 7 7 7 7 7 6 6 . . . . 
        . 6 b 5 7 7 7 7 7 5 9 6 . . . . 
        6 b 9 5 7 7 7 7 5 5 9 9 6 6 . . 
        6 9 9 5 7 7 7 5 5 5 9 9 7 7 6 . 
        6 9 9 7 5 5 5 5 5 7 9 9 7 7 7 6 
        6 9 9 6 6 6 6 6 6 6 9 9 7 7 7 6 
        6 9 b 6 b 6 b b b 6 b 9 7 7 7 6 
        6 b 6 b b 6 b b b b 6 6 6 6 7 6 
        6 6 6 7 7 6 7 7 7 7 6 6 3 3 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 3 3 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 f f f 6 6 6 6 f f f 6 6 6 6 
        . f c c b f 6 6 f c c b f 6 6 . 
        . . f b b . . . . f b b . . . . 
        `,img`
        . . . . 6 6 6 6 6 . . . . . . . 
        . . . 6 7 7 7 7 7 6 6 . . . . . 
        . . 6 7 7 7 7 7 7 7 6 6 . . . . 
        . 6 b 5 7 7 7 5 5 5 9 6 . . . . 
        6 b 9 5 7 7 5 5 5 5 9 9 6 6 . . 
        6 9 9 5 7 5 5 5 5 5 9 9 7 7 6 . 
        6 9 9 7 5 5 5 5 5 7 9 9 7 7 7 6 
        6 9 9 6 6 6 6 6 6 6 9 9 7 7 7 6 
        6 9 b 6 b 6 b b b 6 b 9 7 7 7 6 
        6 b 6 b b 6 b b b b 6 6 6 6 7 6 
        6 6 6 7 7 6 7 7 7 7 6 6 3 3 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 3 3 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 f f f 6 6 6 6 f f f 6 6 6 6 
        . f b f f f 6 6 f b f f f 6 6 . 
        . . b b c . . . . b b c . . . . 
        `,img`
        . . . . 6 6 6 6 6 . . . . . . . 
        . . . 6 7 7 7 7 7 6 6 . . . . . 
        . . 6 7 7 7 7 7 7 7 6 6 . . . . 
        . 6 b 5 5 5 7 7 7 5 9 6 . . . . 
        6 b 9 5 5 5 7 7 7 5 9 9 6 6 . . 
        6 9 9 5 5 7 7 7 5 5 9 9 7 7 6 . 
        6 9 9 7 5 5 5 5 5 7 9 9 7 7 7 6 
        6 9 9 6 6 6 6 6 6 6 9 9 7 7 7 6 
        6 9 b 6 b 6 b b b 6 b 9 7 7 7 6 
        6 b 6 b b 6 b b b b 6 6 6 6 7 6 
        6 6 6 7 7 6 7 7 7 7 6 6 3 3 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 3 3 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 f f f 6 6 6 6 f f f 6 6 6 6 
        . f b b c f 6 6 f b b c f 6 6 . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . . . 6 6 6 6 6 . . . . . . . 
        . . . 6 7 7 7 7 7 6 6 . . . . . 
        . . 6 7 7 7 7 7 7 7 6 6 . . . . 
        . 6 b 5 7 7 7 7 7 5 9 6 . . . . 
        6 b 9 5 7 7 7 7 7 5 9 9 6 6 . . 
        6 9 9 5 7 7 7 7 5 5 9 9 7 7 6 . 
        6 9 9 7 5 5 5 5 5 7 9 9 7 7 7 6 
        6 9 9 6 6 6 6 6 6 6 9 9 7 7 7 6 
        6 9 b 6 b 6 b b b 6 b 9 7 7 7 6 
        6 b 6 b b 6 b b b b 6 6 6 6 7 6 
        6 6 6 7 7 6 7 7 7 7 6 6 3 3 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 3 3 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 f f f 6 6 6 6 f f f 6 6 6 6 
        . f c b b f 6 6 f c b b f 6 6 . 
        . . f f c . . . . f f c . . . . 
        `],
    200,
    true
    )
}
function make_gul () {
    gul = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    gul,
    [img`
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . 4 5 5 5 5 5 4 4 . . . . . 
        . . 4 5 5 5 5 5 5 5 4 4 . . . . 
        . 4 b 2 5 5 5 5 5 2 9 4 . . . . 
        4 b 9 2 5 5 5 5 2 2 9 9 4 4 . . 
        4 9 9 2 5 5 5 2 2 2 9 9 5 5 4 . 
        4 9 9 5 2 2 2 2 2 5 9 9 5 5 5 4 
        4 9 9 4 4 4 4 4 4 4 9 9 5 5 5 4 
        4 9 b 4 b 4 b b b 4 b 9 5 5 5 4 
        4 b 4 b b 4 b b b b 4 4 4 4 5 4 
        4 4 4 5 5 4 5 5 5 5 4 4 3 3 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 3 3 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 f f f 4 4 4 4 f f f 4 4 4 4 
        . f c c b f 4 4 f c c b f 4 4 . 
        . . f b b . . . . f b b . . . . 
        `,img`
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . 4 5 5 5 5 5 4 4 . . . . . 
        . . 4 5 5 5 5 5 5 5 4 4 . . . . 
        . 4 b 2 5 5 5 2 2 2 9 4 . . . . 
        4 b 9 2 5 5 2 2 2 2 9 9 4 4 . . 
        4 9 9 2 5 2 2 2 2 2 9 9 5 5 4 . 
        4 9 9 5 2 2 2 2 2 5 9 9 5 5 5 4 
        4 9 9 4 4 4 4 4 4 4 9 9 5 5 5 4 
        4 9 b 4 b 4 b b b 4 b 9 5 5 5 4 
        4 b 4 b b 4 b b b b 4 4 4 4 5 4 
        4 4 4 5 5 4 5 5 5 5 4 4 3 3 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 3 3 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 f f f 4 4 4 4 f f f 4 4 4 4 
        . f b f f f 4 4 f b f f f 4 4 . 
        . . b b c . . . . b b c . . . . 
        `,img`
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . 4 5 5 5 5 5 4 4 . . . . . 
        . . 4 5 5 5 5 5 5 5 4 4 . . . . 
        . 4 b 2 2 2 5 5 5 2 9 4 . . . . 
        4 b 9 2 2 2 5 5 5 2 9 9 4 4 . . 
        4 9 9 2 2 5 5 5 2 2 9 9 5 5 4 . 
        4 9 9 5 2 2 2 2 2 5 9 9 5 5 5 4 
        4 9 9 4 4 4 4 4 4 4 9 9 5 5 5 4 
        4 9 b 4 b 4 b b b 4 b 9 5 5 5 4 
        4 b 4 b b 4 b b b b 4 4 4 4 5 4 
        4 4 4 5 5 4 5 5 5 5 4 4 3 3 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 3 3 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 f f f 4 4 4 4 f f f 4 4 4 4 
        . f b b c f 4 4 f b b c f 4 4 . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . 4 5 5 5 5 5 4 4 . . . . . 
        . . 4 5 5 5 5 5 5 5 4 4 . . . . 
        . 4 b 2 5 5 5 5 5 2 9 4 . . . . 
        4 b 9 2 5 5 5 5 5 2 9 9 4 4 . . 
        4 9 9 2 5 5 5 5 2 2 9 9 5 5 4 . 
        4 9 9 5 2 2 2 2 2 5 9 9 5 5 5 4 
        4 9 9 4 4 4 4 4 4 4 9 9 5 5 5 4 
        4 9 b 4 b 4 b b b 4 b 9 5 5 5 4 
        4 b 4 b b 4 b b b b 4 4 4 4 5 4 
        4 4 4 5 5 4 5 5 5 5 4 4 3 3 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 3 3 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 f f f 4 4 4 4 f f f 4 4 4 4 
        . f c b b f 4 4 f c b b f 4 4 . 
        . . f f c . . . . f f c . . . . 
        `],
    200,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.setGameOverMessage(false, "GAME OVER!")
})
function make_röd () {
    röd = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    röd,
    [img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 2 2 4 9 e . . . . 
        e b 9 4 2 2 2 2 4 4 9 9 e e . . 
        e 9 9 4 2 2 2 4 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f c c b f e e f c c b f e e . 
        . . f b b . . . . f b b . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 4 4 4 9 e . . . . 
        e b 9 4 2 2 4 4 4 4 9 9 e e . . 
        e 9 9 4 2 4 4 4 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f b f f f e e f b f f f e e . 
        . . b b c . . . . b b c . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 4 4 2 2 2 4 9 e . . . . 
        e b 9 4 4 4 2 2 2 4 9 9 e e . . 
        e 9 9 4 4 2 2 2 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f b b c f e e f b b c f e e . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 2 2 4 9 e . . . . 
        e b 9 4 2 2 2 2 2 4 9 9 e e . . 
        e 9 9 4 2 2 2 2 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f c b b f e e f c b b f e e . 
        . . f f c . . . . f f c . . . . 
        `],
    200,
    true
    )
}
function make_traffic_light () {
    light_state = 0
    traffic_light = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        `, SpriteKind.TrafficLight)
    tiles.placeOnRandomTile(traffic_light, assets.tile`myTile2`)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
function LeadingSpriteX () {
    return Math.max(blå.x, Math.max(grön.x, Math.max(gul.x, röd.x)))
}
function place_players () {
    tiles.placeOnRandomTile(röd, assets.tile`myTile1`)
    tiles.placeOnRandomTile(blå, assets.tile`myTile1`)
    tiles.placeOnRandomTile(gul, assets.tile`myTile1`)
    tiles.placeOnRandomTile(grön, assets.tile`myTile1`)
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
function make_blå () {
    blå = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    blå,
    [img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 6 6 6 6 6 7 9 8 . . . . 
        8 b 9 7 6 6 6 6 7 7 9 9 8 8 . . 
        8 9 9 7 6 6 6 7 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f c c b f 8 8 f c c b f 8 8 . 
        . . f b b . . . . f b b . . . . 
        `,img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 6 6 6 7 7 7 9 8 . . . . 
        8 b 9 7 6 6 7 7 7 7 9 9 8 8 . . 
        8 9 9 7 6 7 7 7 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f b f f f 8 8 f b f f f 8 8 . 
        . . b b c . . . . b b c . . . . 
        `,img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 7 7 6 6 6 7 9 8 . . . . 
        8 b 9 7 7 7 6 6 6 7 9 9 8 8 . . 
        8 9 9 7 7 6 6 6 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f b b c f 8 8 f b b c f 8 8 . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 6 6 6 6 6 8 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 8 . . . . 
        . 8 b 7 6 6 6 6 6 7 9 8 . . . . 
        8 b 9 7 6 6 6 6 6 7 9 9 8 8 . . 
        8 9 9 7 6 6 6 6 7 7 9 9 6 6 8 . 
        8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
        8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
        8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
        8 b 8 b b 8 b b b b 8 8 8 8 6 8 
        8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 8 8 f f f 8 8 8 8 
        . f c b b f 8 8 f c b b f 8 8 . 
        . . f f c . . . . f f c . . . . 
        `],
    200,
    true
    )
}
let light_state = 0
let traffic_light: Sprite = null
let grön: Sprite = null
let gul: Sprite = null
let blå: Sprite = null
let röd: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
make_traffic_light()
make_röd()
make_blå()
make_gul()
make_grön()
controller.player1.moveSprite(röd)
controller.player2.moveSprite(blå)
controller.player3.moveSprite(gul)
controller.player4.moveSprite(grön)
place_players()
game.onUpdate(function () {
    scene.centerCameraAt(LeadingSpriteX() - scene.screenHeight() / 2, blå.y)
    change_traffic_light()
})
