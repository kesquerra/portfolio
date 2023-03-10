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

async function createResume() {
    createWorkExperience();
    createEducation();
}

async function createEducation() {
    await getJson("./data/education.json").then(json => {
        let ul = $("<ul/>");
        json.forEach(degree => {
            let deg_div = $("<div/>", {
                class: "horiz"
            })
            let honors = degree.honors
            if (honors == undefined || honors == null) {
                honors = ""
            } else {
                honors = ", " + honors;
            }
            deg_div.append(
                $("<span/>", {
                    text: degree.type + " in " + degree.concentration +
                    ", " + degree.institution + honors
                })
            )
            deg_div.append(
                $("<span/>", {
                    text: degree.graduation_year
                })
            )
            
            ul.append(deg_div);
        })
        $("#education").append(ul);

    })
}

async function createWorkExperience() {
    await getJson("./data/prev_work.json").then(json => {
        let work = $("#work");
        json.reverse().forEach(employer => {
            let emp_div = $("<div/>", {
                class: "employer"
            })
            let emp_label = $("<div/>", {
                class: "horiz bold"
            })
            emp_label.append($("<span/>", {
                text: employer.employer
            }))
            emp_label.append($("<span/>", {
                text: employer.years
            }))
            emp_div.append(emp_label);
            let positions_div = ($("<ul/>", {
                class: "positions",
            }))
            emp_div.append(positions_div);
            employer.positions.reverse().forEach(position => {
                let pos_div = $("<div/>", {
                    class: "position"
                })
                let pos_label = $("<div/>", {
                    class: "horiz italic"
                })
                pos_label.append($("<span/>", {
                    text: position.title
                }))
                pos_label.append($("<span/>", {
                    text: position.years
                }))
                pos_div.append(pos_label)
                let desc_div = ($("<ul/>", {
                    class: "descriptors"
                })).appendTo(pos_div);
                position.descriptors.forEach(desc => {
                    desc_div.append($("<li/>", {
                        text: desc
                    }))
                })
                positions_div.append(pos_div);
            })
            work.append(emp_div);
        });
    });
}

