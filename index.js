const text= document.querySelector('.circle1 .Round');
text.innerHTML = text.innerText.split('').map(
    (char,i)=>
    `<span style ="transform:rotate(${i*8.3}deg)">${char}</span>`
).join('');
//)
//text.textContent.replace(/\s/g,"<span>$&</span>");
//const ele=document.querySelectorAll('span');
//for(var i=1; i<ele.length; i++){
//    ele[i].style.transform="rotate("+i*16.5 +"deg)";
//}







// javscript Movie filter


//  $(".filter a").click(function (e) {
//     e.preventDefault();
//     var a = $(this).attr("href");
//     a = a.substr(1);
//     $(".sets a").each(function () {
//       if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
//       else $(this).removeClass("hide");
//     });



// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("btncontainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     var current = document.getElementsByClassName("btn-active");
//     current[0].className = current[0].className.replace(" btn-active", "");
//     this.className += " btn-active";

// }
// });


// let imgs = document.querySelectorAll("img");
//   let count;
//   imgs.forEach((img, index) => {
//     img.addEventListener("click", function (e) {
//       if (e.target == this) {
//         count = index;
//         let openDiv = document.createElement("div");
//         let imgPreview = document.createElement("img");
//         let butonsSection = document.createElement("div");
//         butonsSection.classList.add("butonsSection");
//         let closeBtn = document.createElement("button");
//         let nextBtn = document.createElement("button");
//         let prevButton = document.createElement("button");
//         prevButton.innerText = "Previous";
//         nextBtn.innerText = "Next";

//         nextBtn.classList.add("nextButton");
//         prevButton.classList.add("prevButton");
//         nextBtn.addEventListener("click", function () {
//           if (count >= imgs.length - 1) {
//             count = 0;
//           } else {
//             count++;
//           }

//           imgPreview.src = imgs[count].src;
//         });

//         prevButton.addEventListener("click", function () {
//           if (count === 0) {
//             count = imgs.length - 1;
//           } else {
//             count--;
//           }

//           imgPreview.src = imgs[count].src;
//         });

//         closeBtn.classList.add("closeBtn");
//         closeBtn.innerText = "Close";
//         closeBtn.addEventListener("click", function () {
//           openDiv.remove();
//         });

//         imgPreview.classList.add("imgPreview");
//         imgPreview.src = this.src;

//         butonsSection.append(prevButton, nextBtn);
//         openDiv.append(imgPreview, butonsSection, closeBtn);

//         openDiv.classList.add("openDiv");

//         document.querySelector("body").append(openDiv);
//       }
//     });
//   });



// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }


// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }


// Counter Start

function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
  }
  
  function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        //duration 5 seconds
        duration: 5000,
        easing: 'linear',
        step: function() {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
          element.html(this.countNum + html);
        }
      });
    }
  
  }
  
  //When the document is ready
  $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
      //Checking if each items to animate are 
      //visible in the viewport
      $("h2[data-max]").each(function() {
        inVisible($(this));
      });
    })
  });
  

// counter end 


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});