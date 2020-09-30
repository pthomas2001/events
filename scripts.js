$("body").append('<button class="first">First</button>')
$(".first").click(() => {
    console.log('Yeah, you clicked me')
})

$("body").append('<button class="second">Second</button>')
$(".second").click(() => {
    $(".first").text("You clicked it")
})

$("body").append('<button class="third">Third</button>')

$("body").append('<input type="text"></input>')
if ($("input").length <= 1) {
    $("input") = "blue"
}
color = $("input")

$(".third").click(() => {
    $("button").css("background-color", `${color}`)
})