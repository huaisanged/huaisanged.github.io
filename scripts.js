function getStaff() {
    const staffList = [
        "Andy Bishop"
        ,"Anthony Lambergatti"
        ,"Scara D Kat"
        ,"Cara Bloom"
    ];
    staffList.sort();
    return staffList;
}

function createCheckboxes(staffList) {
    var checkDiv = document.getElementById("onDutyChecks");
    for (var i = 0; i < staffList.length; i++) {
        var id = staffList[i].replace(/\s+/g,'');
        $('#onDutyChecks').append(
            "<div class='form-check form-switch'>\
                <input class='form-check-input' type='checkbox' id='" + id+ "'>\
                <label class='form-check-label for='" + id +"'>" + staffList[i] + "</label>\
            </div>"
        );
    }
}

/* Create checkboxes for on duty / on call */

/* If on duty, can't be on call (and vice versa) */

/* Generate signs after clicking button */

function main() {
    var staffList = getStaff();
    createCheckboxes(staffList);
}

$(document).ready(main);