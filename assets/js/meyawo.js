
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


function openTab() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("comment").value;
    
    window.open("https://wa.me/+9613340963?text=name: "+ name+". "+ text+"." , "_blank");
}

function opencv() {
    
    
    window.open("https://drive.google.com/file/d/1bOQHPe4V1BlvL6rN8aptvTUDmDdTHBdA/view?usp=sharing" , "_blank");
}
