/*///LIGHTBOX/////*/
  var userscroll;

//open lightbox
function expand_lb(clicked_el) {
    userscroll = document.documentElement.scrollTop;

    window.scrollTo(0, 0);   
  
  //add expand class
 var lb_el = clicked_el.nextElementSibling;
   if (lb_el.classList){
     lb_el.classList.add('expand'); 
   
   }else{
   lb_el.className += ' ' + 'expand';
 
   }

  
  //add container hide
  var container = document.querySelectorAll(".container");
[].forEach.call(container, function(el1) {
   if (container.classList)
  el1.classList.add('container-hide');
else
el1.className += ' ' + 'container-hide';
});  

 fn_load_portimgs(lb_el);
  };

  
//close lightbox
  function close_lb() {
  
   //remove expand class
  var lbs = document.querySelectorAll(".lightbox.expand");
[].forEach.call(lbs, function(el2) {
  el2.className = el2.className.replace(/\bexpand\b/, "");
});  
    
//remove container hide class
  var cont_hide = document.querySelectorAll(".container.container-hide");
[].forEach.call(cont_hide, function(el3) {
  el3.className = el3.className.replace(/\bcontainer-hide\b/, "");
});  
    
window.scrollTo(0, userscroll);

};

//call window scrolled function
window.onscroll = function(){
win_scroll();
};
 
function win_scroll() {
  var scroll_top = (document.documentElement && document.documentElement.scrollTop) || 
              document.body.scrollTop;
  var win_height = window.innerHeight;
  
  var skills = document.querySelectorAll('.skill-pic');
    for (i = 0; i < skills.length; i++) { 
      var top = skills[i].offsetTop
if (top < scroll_top + (win_height/1.5)){
    if (skills[i].classList)
  skills[i].classList.add('in-view');
else
  skills[i].className += ' ' + 'in-view'; 
}
    }

}

/*///DEFER LOAD///*/
function fn_load_portimgs(lb){
  var lb_con = lb.children[0];
  var lb_img = lb_con.children[1];
   var lb_a = lb_img.children;
  
  for (i = 0; i < lb_a.length; i++) { 
   var img = lb_a[i].children[0];
  img.setAttribute("src", img.getAttribute("defer-img"));
  }
}

/*///SMOOTH SCROLL///*/
initSmoothScrolling();
function initSmoothScrolling() {
  var duration = 400;

  var pageUrl = location.hash ?
      stripHash(location.href) :
      location.href;

  delegatedLinkHijacking();
  //directLinkHijacking();

  function delegatedLinkHijacking() {
    document.body.addEventListener('click', onClick, false);

    function onClick(e) {
      var target = e.target;
      if (!isInPageLink(target)) {
        var output = isInPageLinkRecurse(target);
        if(output != false) {
          target = output;
        } else {
          return;
        }

      }


      e.stopPropagation();
      e.preventDefault();

      jump(target.hash, {
        duration: duration,
        callback: function() {
          setFocus(target.hash);
        }
      });
    }
  }

  function directLinkHijacking() {
    [].slice.call(document.querySelectorAll('a'))
        .filter(isInPageLink)
        .forEach(function(a) {
          a.addEventListener('click', onClick, false);
        });

    function onClick(e) {
      e.stopPropagation();
      e.preventDefault();

      jump(e.target.hash, {
        duration: duration
      });
    }

  }

function isInPageLink(n) {
  return n && n.tagName.toLowerCase() === 'a' &&
      n.hash.length > 0 &&
      stripHash(n.href) === pageUrl;
}

  var count = 0;
  var isInPageLinkRecurse = function recurse (target) {
    var parent = target.parentElement;
    var linkFound = isInPageLink(parent);
    if (linkFound) {
      count = 0;
      return parent;
    } else if (count < 4){
      count++;
      return recurse(parent);
    } else {
      count = 0;
      return linkFound;
    }
  };

  function stripHash(url) {
    return url.slice(0, url.lastIndexOf('#'));
  }

  function isCssSmoothSCrollSupported() {
    return 'scrollBehavior' in document.documentElement.style;
  }

  // Adapted from:
  // https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
  function setFocus(hash) {
    var element = document.getElementById(hash.substring(1));

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }

      element.focus();
    }
  }

}

function jump(target, options) {
  var
      start = window.pageYOffset,
      opt = {
        duration: options.duration,
        offset: options.offset || 0,
        callback: options.callback,
        easing: options.easing || easeInOutQuad
      },
      distance = typeof target === 'string' ?
      opt.offset + document.querySelector(target).getBoundingClientRect().top :
          target,
      duration = typeof opt.duration === 'function' ?
          opt.duration(distance) :
          opt.duration,
      timeStart, timeElapsed;

  requestAnimationFrame(function(time) {
    timeStart = time;
    loop(time);
  });

  function loop(time) {
    timeElapsed = time - timeStart;

    window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

    if (timeElapsed < duration)
      requestAnimationFrame(loop);
    else
      end();
  }

  function end() {
    window.scrollTo(0, start + distance);

    if (typeof opt.callback === 'function')
      opt.callback();
  }

  // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b
  }

}
