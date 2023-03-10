function addNavLinks() {
    $("body").on('click', 'a.nav-link', function() {
        loadPage($(this))
    })
}

function loadPage(element) {
    $(".nav-link").each(function() {
        $(this).removeClass("active")
    });
    element.addClass("active");
    let id = element.attr("id");
    $("#content").load("pages/" + id + ".html", function() {
        if (id === "prev_work") {
            createResume();
        }
    });
}

function getOrDefault(func, def) {
    let v = func
    if(null === v || 'undefined' === v) {
        v = def;
    }
    return v;
}

function getCurrentPage() {
    let page = getOrDefault(localStorage.getItem('page'), 'home');
    return $("#" + page);
}

$(window).on('beforeunload', function(){
    let id = $(".active:first").attr("id");
    localStorage.setItem('page', id);
})

$(window).on('load', async function() {
    $("#navbar").load("components/navbar.html", function() {
        addNavLinks();
        loadPage(getCurrentPage())
    });
    $("#footer").load("components/footer.html")
    
})

async function getJson(file) {
    return await fetch(file).then(resp => resp.json())
}



