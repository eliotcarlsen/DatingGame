$(function(){
  $("form#matchMaker").submit(function(event){
    event.preventDefault();
    var userAge = $("#userAge").val();
    userAge = parseInt(userAge);
    var userProfession = $("#profession").val();
    var userGender = $("#gender").val();
    if (userAge < 30 && userProfession === "singer" && userGender === "male"){
      $(".JustinB").show();
    } else if (userAge < 30 && userProfession === "singer" && userGender === "female"){
      $(".Taylor").show();
    } else if (userAge < 30 && userProfession === "actor" && userGender === "male"){
      $(".JustinT").show();
    } else if (userAge < 30 && userProfession === "actor" && userGender === "female") {
      $(".Lucy").show();
    } else if ((userAge >= 30 && userAge <= 50) && userProfession === "actor" && userGender === "male"){
      $(".Brad").show();
    } else if ((userAge >= 30 && userAge <= 50) && userProfession === "actor" && userGender === "female"){
      $(".Cindy").show();
    } else if ((userAge >= 30 && userAge <= 50) && userProfession === "singer" && userGender === "male"){
      $(".Jayz").show();
    } else if ((userAge >= 30 && userAge <= 50) && userProfession === "singer" && userGender === "female"){
      $(".Beyonce").show();
    } else if (userAge > 50 && userProfession === "actor" && userGender === "male"){
      $(".Donald").show();
    } else if (userAge > 50 && userProfession === "actor" && userGender === "female"){
      $(".Susan").show();
    } else if (userAge > 50 && userProfession === "singer" && userGender === "male"){
      $(".Michael").show();
    } else if (userAge > 50 && userProfession === "singer" && userGender === "female"){
      $(".Madonna").show();
    };
  });
});
