function getStaff() {
    const staffList = [
        "Andy Bishop"
        ,"Anthony Lambergatti"
        ,"Scara D Kat"
        ,"Cara Bloom"
        ,"Justin Jones"
        ,"Samson Rockwell"
        ,"Biggus Dickus"
        ,"Nick DiLucca"
        ,"Jaden Stone"
        ,"Amy Goode"
        ,"Minh Tea"
        ,"Mae Day"
        ,"Hayden Montgomery"
        ,"Talia Romanoff"
        ,"Ezra Tzara"
        ,"Percy Hunt"
        ,"Kevin Nyguyen"
        ,"Hans Hund"
        ,"Misty Laker"
        ,"Brendan Booker"
        ,"Mortimer Smith"
        ,"Ella Rivera"
        ,"David Calvin"
        ,"Robert OReilly"
        ,"Jack Vos"
        ,"Galadriel Luna"
        ,"Charles Carmicheal"
        ,"Nicolai Nykovicz"
        ,"Castor Varg"
        ,"Ken Dozerman"
        ,"Salvatore Romano"
        ,"Skye Johnson"
        ,"Natalie Quinn"
    ];
    staffList.sort();
    return staffList;
}

function createCheckboxes(staffList) {
    onDutyCheckboxes(staffList);
    onCallCheckboxes(staffList);
}

function onDutyCheckboxes(staffList) {
    var checkDiv = document.getElementById("onDutyChecks");
    for (var i = 0; i < staffList.length; i++) {
        var id = staffList[i].replace(/\s+/g,'');
        $('#onDutyChecks').append(
            "<div class='form-check form-switch'>\
                <input class='form-check-input' type='checkbox' id='" + id+ "onDuty'>\
                <label class='form-check-label' for='" + id +"onDuty'>" + staffList[i] + "</label>\
            </div>"
        );
    }
}

function onCallCheckboxes(staffList) {
    var checkDiv = document.getElementById("onCallChecks");
    for (var i = 0; i < staffList.length; i++) {
        var id = staffList[i].replace(/\s+/g,'');
        $('#onCallChecks').append(
            "<div class='form-check form-switch'>\
                <input class='form-check-input' type='checkbox' id='" + id + "onCall'>\
                <label class='form-check-label' for='" + id +"onCall'>" + staffList[i] + "</label>\
            </div>"
        );
    }
}

/* Generate signs after clicking button */
function generateSigns() {
    var staffList = getStaff();
    staffList.sort();
    onDutySign(staffList);
    onCallSign(staffList);
}

function onDutySign(staffList) {
    $('#onDutyText').empty()
    var onDutySign = ""
    for (var i = 0; i < staffList.length; i++) {
        var id = '#' + staffList[i].replace(/\s+/g,'') + "onDuty";
        if (document.querySelector(id).checked) {
            onDutySign += staffList[i] + " ~n~ "
        }
    };
    onDutySign = onDutySign.substr(0,onDutySign.length - 4);
    $('#onDutyText').append("<p>" + onDutySign + "</p>");
}

function onCallSign(staffList) {
    $('#onCallText').empty()
    var onCallSign = ""
    for (var i = 0; i < staffList.length; i++) {
        //alert("staffList.length: " + staffList.length)
        //alert("i: " + i);
        var id = '#' + staffList[i].replace(/\s+/g,'') + "onCall";
        if (document.querySelector(id).checked) {
            onCallSign += staffList[i] + " ~n~ ";
        }
    };
    onCallSign = onCallSign.substr(0,onCallSign.length - 4);
    $('#onCallText').append("<p>" + onCallSign + "</p>");
}


function main() {
    var staffList = getStaff();
    createCheckboxes(staffList);
}

$(document).ready(main);