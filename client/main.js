// functions for adding city under lockdown

function postLockdown() {
    var city = $("#city-post-input").val();

    // Fires an Ajax call to the URL defined in the index.js function file
    // All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
    $.ajax({
        url: "/server/alien_city_function/alien",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "city_name": city
        }),
        success: function (data) {
            alert(data.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}

// Fires an API call to the server to check whether the given city is under lockdown or not

function getLockdown() {
    showLoader();
    var positive = "https://media.giphy.com/media/yss0eq8dKTDwg5mwjC/giphy.gif";
    var negative = "https://media.giphy.com/media/mJQZKikdrwaNtaFHaA/giphy.gif";

    var city = $("#city-get-input").val();

    // Fires an Ajax call to the URL defined in the index.js function file
    // All URLs to the function will be of the pattern: /server/{function_name}/{url_path}
    $.ajax({
        url: "/server/alien_city_function/alien?city_name=" + city,
        type: "get",
        success: function (data) {
            console.log(data);
            $("#result-text").text("");
            $("#result-text").text(data.message);
            var imagesrc = negative;
            if (data.signal == 'positive') {
                imagesrc = positive;
            }
            $("#result-image").html("");
            $("#result-image").html("<img src='" + imagesrc + "' />");
            hideLoader();
        },
        errror: function (error) {
            alert(error.message);
        }
    });
}

// Shows the loader and hides the result container
function showLoader() {
    $("#result-container").hide();
    $("#loader").show();
}


// Hides the loader and shows the result container
function hideLoader() {
    $("#loader").hide();
    $("#result-container").show();
}