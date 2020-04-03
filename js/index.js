window.onload = function(){
    var Carousel = document.getElementById('Carousel');
    var ul = Carousel.getElementsByTagName('ul')[0];
    var li = ul.getElementsByTagName('li');
    var div = Carousel.getElementsByTagName('div')[0];
    var a = div.getElementsByTagName('a');
    var brandlist_item = document.getElementsByClassName('brandlist_item');
    var brandlist_a = brandlist_item[29].getElementsByTagName('a')[0];
    var brandlist_img = brandlist_a.getElementsByTagName('img')[0];
    var boutique_li = document.getElementsByClassName('boutique_li');
    var boutique_content = document.getElementsByClassName('boutique_content');
    var sidebar_shopcar = document.getElementsByClassName('sidebar_shopcar')[0];
    var sidebar_shopcar_img = document.getElementById('sidebar_shopcar_img');
    var sidebar_return = document.getElementsByClassName('sidebar_return')[0];


    var index = 0;
    var arr = [
        'url(./images/banner1.png)',
        'url(./images/banner2.png)',
        'url(./images/banner3.png)',
        'url(./images/banner4.png)',
        'url(./images/banner5.png)',
        'url(./images/banner6.png)'
    ];
    var rotate = 0;
    var boutiqueIndex = 0;
    var timer = setInterval(start,3000);
    var boutiqueTimer = setInterval(boutiqueStart,1500);
    var scrollTimer = null;
    var scrollIs = true;
    var scrollTop = 0;
    var scrollSpeed = 0
    li[0].style.display = 'block';
    
    //返回顶部
    if(!scrollIs){
        clearInterval(scrollTimer);
        scrollIs = true;
    }
    sidebar_return.onclick = function(){
        scrollTimer = setInterval(function() {
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            scrollSpeed = Math.floor(-scrollTop/8);
            if(scrollTop <= 0){
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                clearInterval(scrollTimer);
                scrollIs = false;
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + scrollSpeed;
        }, 20);
    }

    sidebar_shopcar.onmouseover = function(){
        sidebar_shopcar_img.src = "./images/sidebar_shopcar2.png";
    }
    sidebar_shopcar.onmouseout = function(){
        sidebar_shopcar_img.src = "./images/sidebar_shopcar.png";
    }


    //轮播图
    a[0].onmouseover = function(){
        select(0);
    };
    a[1].onmouseover = function(){
        select(1);
    };
    a[2].onmouseover = function(){
        select(2);
    };
    a[3].onmouseover = function(){
        select(3);
    };
    a[4].onmouseover = function(){
        select(4);
    };
    a[5].onmouseover = function(){
        select(5);
    };

    Carousel.onmouseover = function(){
        clearInterval(timer);
    };
    Carousel.onmouseout = function(){
        clearInterval(timer);
        timer = setInterval(start,3000);
    };

    function select(num){
        clearInterval(timer);
        for(i = 0; i < 6; i++){
            li[i].style.display = 'none';
            a[i].classList.remove("a_hover");
        }
        index = num;
        li[index].style.display = 'block';
        mask_bg.style.backgroundImage = arr[index];
        a[index].classList.add("a_hover");
    }
    function start(){
        for(i = 0; i < 6; i++){
            li[i].style.display = 'none';
            a[i].classList.remove("a_hover");
        }
        if(index == 6){
            index = 0;
        }
        li[index].style.display = 'block';
        mask_bg.style.backgroundImage = arr[index];
        a[index].classList.add("a_hover");
        index += 1;
    };

    //品牌翻转
    brandlist_a.onclick = function(){ 
        rotate += 720;
        brandlist_img.style.transition = '1s all ease';
        brandlist_img.style.webkitTransition = '1s all ease';
        brandlist_img.style.transform = 'rotate('+ rotate +'deg)';
        brandlist_img.style.webkitTransform = 'rotate('+ rotate +'deg)';
        for(i = 0;i < brandlist_item.length - 1;i++){
            brandlist_item[i].style.transition = '1s all ease';
            brandlist_item[i].style.transform = 'rotateY('+ rotate/2 +'deg)';
        }
    }
    brandlist_a.onmouseout = function(){
        brandlist_img.style.transition = '';
        brandlist_img.style.webkitTransition = '';
        brandlist_img.style.transform = 'rotate(0deg)';
        brandlist_img.style.webkitTransform = 'rotate(0deg)';
        rotate = 0;
        for(i = 0;i < brandlist_item.length - 1;i++){
            brandlist_item[i].style.transition = '';
            brandlist_item[i].style.transform = 'rotateY('+ rotate +'deg)';
        }
    }
    brandlist_a.onmouseover = function(){
        brandlist_img.style.transition = '.7s all ease';
        brandlist_img.style.webkitTransition = '.7s all ease';
        brandlist_img.style.transform = 'rotate(180deg)';
        brandlist_img.style.webkitTransform = 'rotate(180deg)';
    }


    //天猫超时今日疯抢和量贩装切换
    boutique_li[0].onmouseover = function(){
        clearInterval(boutiqueTimer);
        boutiqueIndex = 0;
        boutiqueStart();
    }
    boutique_li[0].onmouseout = function(){
        clearInterval(boutiqueTimer);
        boutiqueTimer = setInterval(boutiqueStart,1500);
    }
    boutique_li[1].onmouseover = function(){
        clearInterval(boutiqueTimer);
        boutiqueIndex = 1;
        boutiqueStart();
    }
    boutique_li[1].onmouseout = function(){
        clearInterval(boutiqueTimer);
        boutiqueTimer = setInterval(boutiqueStart,1500);
    }

    function boutiqueStart(){
        for(i = 0; i < boutique_li.length; i++){
            boutique_li[i].style.backgroundColor = '#eee';
            boutique_li[i].style.color = '#000';
            boutique_content[i].style.display = 'none';
        }
        if(boutiqueIndex == 0){
            boutique_li[boutiqueIndex].style.backgroundColor = '#00b262';
            boutique_li[boutiqueIndex].style.color = 'white';
            boutique_content[boutiqueIndex].style.display = 'block';
            boutiqueIndex = 1;
        }else{
            boutique_li[boutiqueIndex].style.backgroundColor = '#00b262';
            boutique_li[boutiqueIndex].style.color = 'white';
            boutique_content[boutiqueIndex].style.display = 'block';
            boutiqueIndex = 0;
        }
    }
}
