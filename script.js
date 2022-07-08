$('document').ready(function(){
    console.log('Lets get ready to party with jQuery!');
})
$('article>img').addClass('image-center')

$('article p:last-chiild').remove()

const random = Math.floor(Math.random() * 100)
$('h1').css('font-size', `${random}px`)

$('<li>Hello</li>').appendTo('ol')
$('li').remove()
$('<p>Sorry, I got rid of that junk</p>').appendTo('ol')

