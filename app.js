$(function () {
    var documentEle = $(document),
        fadedEle = $('.opacity');


    documentEle.on('scroll', function () {
        var currScrolTop = documentEle.scrollTop();


        fadedEle.each(function () {
            var eleTopOffset = $(this).offset().top;
            if (currScrolTop > $(this).offset().top) $(this).css('opacity', 1 - (currScrolTop - eleTopOffset) / 600)
        });
    });
});
$(function () {
    $('a').on('click', function (event) {
        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }), 2000, function () {
                window.location.hash = hash;
            }
        }

    })

})
/* ************************************************************************************************************** */
var authorInfo = {
    name : 'Aashir Khan',
    skills : ['Communication', 'Organization', 'Learning', 'Planning', 'HTML', 'CSS', 'JavaScript', 'Java'],
    aboutAuthor : "<strong>Lorem ipsum dolor sit amet, consectetur</strong> adipisicing elit. Debitis minus"+ 
                    "consequuntur repudiandae temporibus obcaecati odit ratione, cumque error, illo delectus" + 
                    "iusto pariatur atque eveniet, repreh enderit tempore vero! Aliquam ipsam, possimus.enderit" + 
                    "tempore vero! Aliquam ipsam, possimus. Lorem ipsum dolor sit amet, consectetur adipisicing" +
                    "elit. Debitis minus consequuntur repudiandae temporibus obcaecati odit ratione,cumque error, illo delectus iusto pariatur atque eveniet"
};
    // console.log(document.getElementsByClassName('skill'));

function fillContents(){
    var name = document.getElementById('name'),
        skill = document.getElementsByClassName('skill'),
        aboutAuthorDiv = document.getElementById('blurb1'),
        aboutAuthor = aboutAuthorDiv.getElementsByTagName('p');

    name.insertAdjacentHTML('beforeend',authorInfo.name);
    // aboutAuthor.insertAdjacentHTML('beforeend', authorInfo.name);
    aboutAuthor.innerHTML = authorInfo.aboutAuthor;
    console.log(aboutAuthor)
    // aboutAuthor.innerHTML = authorInfo.aboutAuthor;
    for(var i = 0; i < authorInfo.skills.length; i++){
        skill[i].innerHTML = authorInfo.skills[i];
        console.log(skill[i], authorInfo.skills[i])
    } 
}
fillContents();



