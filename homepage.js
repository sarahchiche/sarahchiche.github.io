$(document).ready(function(){
  console.log($("body").css("background-color"))
  $(".image").click(changeBackground)
})

function changeBackground(){
  if($("body").css("background-color") === "rgba(0, 0, 0, 0)") {
    $("body").css("background-color","black")
  } else {
    console.log("whatsup")
    $("body").css("background-color","white")
  }
}
