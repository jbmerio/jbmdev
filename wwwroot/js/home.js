jq(function () {
    // Initialisation de l'image de fond
    setBackground();

    jq(document).ready(function () {
        resizeAll();
        // Si la hauteur du background est inférieur à la hauteur de la page, on affecte la hauteur du background à la hauteur de la page
        if (jq('#background').height() < window.innerHeight) {
            jq('#background').css('height', window.innerHeight + 'px');
        }
    });

    jq(window).resize(function () {
        resizeAll();

        // Si la hauteur du background est inférieur à la hauteur de la page, on affecte la hauteur du background à la hauteur de la page
        if (jq('#background').height() < window.innerHeight) {
            jq('#background').css('height', window.innerHeight + 'px');
        }
    });

    // Avance la scrollbar horizontalement sur smartphone pour centrer l'image de fond
    if (jq(window).width() < 768) {
        jq('html').animate({ scrollLeft: jq('#background').width() / 2 - jq(window).width() / 2 }, 1000);
    }

    // Change l'image au hover de #developer
    jq("#developer").hover(function () {
        setBackground("2");
        //hoverItem("developer", "resources/background-2.jpg", "center center");
        setBackgroundTransformOrigin("center center");
        jq("#head").tooltip("open");
    }, function () {
        setBackground();
        //unhoverItem("developer", "resources/background.jpg");
        setBackgroundTransformOrigin("center center");
        jq("#head").tooltip("close");
    });

    // Change l'image au hover de #screen1
    jq("#screen1").hover(function () {
        setBackgroundTransformOrigin("left center");
        setBackground("3");
    }, function () {
        setBackgroundTransformOrigin("left center");
        setBackground();
    });

    // Change l'image au hover de #screen3
    jq("#screen3").hover(function () {
        setBackgroundTransformOrigin("right center");
        setBackground("4");
    }, function () {
        setBackgroundTransformOrigin("right center");
        setBackground();
    });

    // Ferme les tooltips au clic d'un lien
    jq("a").click(function (e) {
        jq(".ui-tooltip").hide();
    });

    var tooltipOptions = {
        content: function () {
            console.log(jq(this).attr("id"));
            return jq(this).prop('title');
        },
        classes: { "ui-tooltip": "custom-tooltip " + jq(this).attr("id") },
        show: { effect: "puff", duration: 100 },
        hide: { effect: "puff", duration: 100 },
        position: { my: "top-75", at: "top" }
    };
    if (jq(window).width() > 768) {
        jq("#head").tooltip(tooltipOptions);
        jq("#screen1").tooltip(tooltipOptions);
        jq("#screen3").tooltip(tooltipOptions);
    }

    // Déplace la scrollbar horizontalement sur un clic d'une flèche
    // Avance de la largeur de l'écran
    jq(".arrow-right").click(function () {
        jq('html').animate({ scrollLeft: jq('html').scrollLeft() + jq(window).width() }, 1000);
    });

    jq(".arrow-left").click(function () {
        jq('html').animate({ scrollLeft: jq('html').scrollLeft() - jq(window).width() }, 1000);
    });

    // Sur smartphone, au bout de 5 secondes, on affiche une indication à l'utilisateur
    if (jq(window).width() < 768) {
        setTimeout(function () {
            jq("#hint").fadeIn(500);
            jq("#hint").css("display", "flex");
        }, 5000);
    }
});

// Fonction qui change l'image de fond
function setBackground(bg) {
    console.log("setBackground " + bg);
    jq("#background").attr("src", "resources/background" + (bg ? "-" + bg : "") + ".jpg");
}

function setBackgroundTransformOrigin(position) {
    jq('#background').css("transform-origin", position);
}

function resizeAll() {
    jq('#screen1').css('top', jq('#background').height() * 0.27 + 'px');
    jq('#screen1').css('left', jq('#background').width() * 0.05 + parseInt(jq('#background').css("margin-left")) + 'px');
    jq('#screen1').css('width', jq('#background').height() * 0.28 + 'px');
    jq('#screen1').css('height', jq('#background').width() * 0.19 + 'px');

    jq('#head').css('top', jq('#background').height() * 0.3 + 'px');
    jq('#head').css('left', jq('#background').width() * 0.33 + parseInt(jq('#background').css("margin-left")) + 'px');
    jq('#head').css('width', jq('#background').height() * 0.13 + 'px');
    jq('#head').css('height', jq('#background').width() * 0.16 + 'px');

    jq('#body').css('top', jq('#background').height() * 0.46 + 'px');
    jq('#body').css('left', jq('#background').width() * 0.26 + parseInt(jq('#background').css("margin-left")) + 'px');
    jq('#body').css('width', jq('#background').height() * 0.2 + 'px');
    jq('#body').css('height', jq('#background').width() * 0.33 + 'px');

    jq('#arms').css('top', jq('#background').height() * 0.46 + 'px');
    jq('#arms').css('left', jq('#background').width() * 0.45 + parseInt(jq('#background').css("margin-left")) + 'px');
    jq('#arms').css('width', jq('#background').height() * 0.2 + 'px');
    jq('#arms').css('height', jq('#background').width() * 0.14 + 'px');

    jq('#bottom').css('top', jq('#background').height() * 0.64 + 'px');
    jq('#bottom').css('left', jq('#background').width() * 0.43 + parseInt(jq('#background').css("margin-left")) + 'px');
    jq('#bottom').css('width', jq('#background').height() * 0.13 + 'px');
    jq('#bottom').css('height', jq('#background').width() * 0.28 + 'px');

    jq('#screen3').css('top', jq('#background').height() * 0.27 + 'px');
    jq('#screen3').css('left', jq('#background').width() * 0.68 + parseInt(jq('#background').css("margin-left")) + 'px');
    jq('#screen3').css('width', jq('#background').height() * 0.26 + 'px');
    jq('#screen3').css('height', jq('#background').width() * 0.19 + 'px');
}