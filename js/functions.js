/*///LIGHTBOX/////*/
  var userscroll;

//open lightbox
function expand_lb(clicked_el) {
 
    userscroll = document.body.scrollTop;

    window.scrollTo(0, 0);   
  
  //add expand class
 var lb_el = clicked_el.nextElementSibling;
   if (lb_el.classList)
  lb_el.classList.add('expand');
else
 lb_el.className += ' ' + 'expand';
  
  //add container hide
  var container = document.querySelectorAll(".container");
[].forEach.call(container, function(el1) {
   if (container.classList)
  el1.classList.add('container-hide');
else
el1.className += ' ' + 'container-hide';
});  

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

//add small menu on scroll
window.onscroll = function(){
win_scroll();
anim_skill_icons();
};
 
function win_scroll() {
  var scroll_top = document.body.scrollTop;
    var header = document.getElementById("header-side");
  
  if (scroll_top > 40){
if (header.classList)
  header.classList.add('header-side-show');
else
  header.className += ' ' + 'header-side-show';
  }else{
      header.className = header.className.replace(/\bheader-side-show\b/, "");
  } 
}

/*///ANIMATE ICONS ON SCROLL*/
function isScrolledIntoView(elem) {
    var docViewTop = window.scrollY;
    var docViewBottom = docViewTop + window.innerHeight;

var rect = elem.getBoundingClientRect();
var elemTop = rect.top + document.body.scrollTop;
  
var elemBottom = elemTop + elem.offsetHeight;

return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function anim_skill_icons() {
 var elements = document.querySelectorAll('.skill-pic');
Array.prototype.forEach.call(elements, function(el, i){
   if (isScrolledIntoView(el) === true) {
            
  if (el.classList)
  el.classList.add('in-view');
else
  el.className += ' ' + 'in-view'; 
        }
}); 
  
   var elements2 = document.querySelectorAll('.footer');
Array.prototype.forEach.call(elements2, function(el, i){
   if (isScrolledIntoView(el) === true) {
            
  if (el.classList)
  el.classList.add('footer-grow');
else
  el.className += ' ' + 'footer-grow'; 
        }
}); 
};

/*///SMOOTH SCROLL///*/
initSmoothScrolling();

function initSmoothScrolling() {
  if (isCssSmoothSCrollSupported()) {
    document.getElementById('css-support-msg').className = 'supported';
    return;
  }

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
