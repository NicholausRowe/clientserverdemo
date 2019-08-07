$(document).ready(startApp);

function startApp(){
    getNameAjaxCall();
    getFoodAjaxCall();
}

function getNameAjaxCall(){

    var settings = {
        url: 'http://localhost:3001/names',
        method: 'GET',
        dataType: 'json',
        success: handleNameDataFromServer
    }
    $.ajax(settings);
}

function handleNameDataFromServer(response){
    console.log('name data response', response);
    for (var index = 0; index < response.length; index++){
        var nameDiv = $("<div>").text(response[index].name);
        $("body").append(nameDiv);
    }
}


function getFoodAjaxCall(){

    var settings = {
        url: 'http://localhost:3001/getfood',
        method: 'GET',
        dataType: 'json',
        success: handleFoodDataFromServer
    }
    $.ajax(settings);
}

function handleFoodDataFromServer(response){
    console.log('food data response', response);
    for (var index = 0; index < response.length; index++){
        var foodDiv = $("<div>").text(response[index].food);
        $("body").append(foodDiv);
    }
}
