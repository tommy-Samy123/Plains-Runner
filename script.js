var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var dead = 0;
//var sheep = 0; //if is in air
function jump() {

	if (character.classList !== "animate" && dead === 0) {
		character.classList.add("animate");
		score = score + 1
        //sheep = 1
		document.getElementById("button_score").textContent = "Score: " + score;

	}

	setTimeout(function(){
		character.classList.remove("animate");
        //sheep = 0
	}, 400);
}

var checkDead = setInterval(function() {
	var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft < 40 && blockLeft > 0 && characterBottom < -120) {
		block.style.animation = "none";
		block.style.display = "none";
		character.style.animation = "none";
		dead = 1;
		
		document.getElementById("button_status").textContent = "You Died";
		character.classList.remove("animate");
		score = 0;
	}
		
}, 5);
