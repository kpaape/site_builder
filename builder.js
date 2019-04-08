var customContent = {
    header: {
        text: "",
        align: "",
        fgColor: "",
        bgColor: ""
    },
    body: [],
    footer: {
        text: "",
        fgColor: "",
        bgColor: ""
    }
};

$(document).ready(function() {
    $("#create-content").change(function() {
        $(".create-content").hide();
        var createSelect = $("#create-content").val();
        $("#" + createSelect).show();
    });
    $("#edit-content").change(function() {
        $(".edit-content").hide();
        var editSelect = $("#edit-content").val();
        $("#" + editSelect).show();
    });

    $("#header-fg-color-selector").change(function() {
        var color = $("#header-fg-color-selector").val();
        $("#header-fg-color").val(color);
    });
    $("#header-fg-color").change(function() {
        var color = $("#header-fg-color").val();
        $("#header-fg-color-selector").val(color);
    });
    $("#header-bg-color-selector").change(function() {
        var color = $("#header-bg-color-selector").val();
        $("#header-bg-color").val(color);
    });
    $("#header-bg-color").change(function() {
        var color = $("#header-bg-color").val();
        $("#header-bg-color-selector").val(color);
    });
});

function createHeader() {
    customContent.header.text = $("#header-text").val();
    customContent.header.align = $("#header-align").val();
    customContent.header.fgColor = $("#header-fg-color").val();
    customContent.header.bgColor = $("#header-bg-color").val();
    $("#option-create-header").hide();
    $(".create-content").hide();
    $("#create-content").val("--Select Content Type--");
    shiftHeaderForm();
    renderHTML();
}

function renderHTML(content = customContent) {
    $("main#main").html("");
    var header = content.header;
    var htmlString = "<header style='color:" + header.fgColor + ";background-color:" + header.bgColor + ";text-align:" + header.align + "' class='col-xs-12'>";
    htmlString += "<h1>" + header.text + "</h1></header>";
    $("#main").html(htmlString);
}

function shiftHeaderForm() {
    var headerForm = $("#create-header");
    // $("#create").detach(headerForm);
    headerForm.detach();
    $("#edit").append(headerForm);

    headerForm.attr("id", "edit-header");
    headerForm.removeClass("create-content");
    headerForm.addClass("edit-content");
    $("#submit-header").val("Edit Header");

    $("#option-edit-header").show();
}

function openNav() {
    $("#mySidebar").css("width", "450px");
    $("#main").css("margin-left", "450px");
}

function closeNav() {
    $("#mySidebar").css("width", "0");
    $("#main").css("margin-left", "0");
}