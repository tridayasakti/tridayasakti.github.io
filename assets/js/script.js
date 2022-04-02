$(document).ready(function(){

    // trigger
    $('.trigger').on('click', function(e){
        e.preventDefault()
        
        let el = $(this).attr('href')
        let tujuan = $(el)

        if($(this).attr('href') !== '#home'){
            $('html,body').animate({
                scrollTop: tujuan.offset().top -50
            }, 500)
        }else{
            $('html,body').animate({
                scrollTop: tujuan.offset().top -160
            }, 500)
        }   

    })

    // scroll
    $(window).scroll(function(){
        if($(this).scrollTop() > 96){
            $('.navbar').addClass('fix')
            $('.home').addClass('mod-home')
            $('.berita').addClass('mod-berita')
            // $('.navbar').addClass('navbar-shrink')
        }else{
            $('.navbar').removeClass('fix')
            $('.home').removeClass('mod-home')
            $('.berita').removeClass('mod-berita')
            // $('.navbar').removeClass('navbar-shrink')
        }
    })

    // nav link active
    $(document).on('click', '.nav-link', function(){
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })

    // accordion active
    $(document).on('click', '.accordion-button', function(){
        $('.accordion-button').find('i').removeClass('putar')
        // $(this).find('i').removeClass('putar')
        $('.accordion-button').removeClass('add-bg-acc')
        $('.accordion-button').removeClass('warna-awal')
        $('.accordion-button').removeClass('bg-awal')
        $(this).addClass('add-bg-acc')
        $(this).find('i').addClass('putar')
    })

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            }
        }
    })

    // dark mode
    $(document).on('click', '.dark-mode', function(){
        if($('body').hasClass('dark')){
            $('body').removeClass('dark')
            $(this).removeClass('bg-dark-light')
            $('.dark-mode .bi').removeClass('bi-brightness-high-fill')
            $('.dark-mode .bi').addClass('bi-moon-fill')
        }else{
            $('body').addClass('dark')
            $(this).addClass('bg-dark-light')
            $('.dark-mode .bi').removeClass('bi-moon-fill')
            $('.dark-mode .bi').addClass('bi-brightness-high-fill')
        }
    })

})