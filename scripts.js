$(document).ready(function() {
    let radius = 175;
    $(".innerCircle" ).draggable({
        revert: "invalid",
        drag: function(e, d) {
            let maxMove = radius;
            let maxMoveSqr = radius * radius;
            let l = d.position.left;
            let t = d.position.top;
            let len = l * l + t * t;
            if (maxMoveSqr < len) {
                d.position.left = l / Math.sqrt(len) * maxMove;
                d.position.top = t / Math.sqrt(len) * maxMove;
            }
        }
    });
});