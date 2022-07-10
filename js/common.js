window.onload = function(){
  
var bgImg1=document.getElementById('bg-img1');
if(bgImg1){
  var opac;
var count=0;
window.setInterval (function BG(){
  
  count++;
  
  if(count==1200){
    count=0;
  }
  
  if(count<=600&&count>=500)
    opac=600-count;
  else if(count>=1100&&count<=1200)
    opac=count-1100;
  else
    opac=opac;
  bgImg1.style.opacity=opac/100;
}, 30);
}



/*Gridify*/   
var gallery= document.querySelector('.grid');

      var options =
      {
           srcNode: '.works-item',             // grid items (class, node)
           margin: '30px',             // margin in pixel, default: 0px
           width: '430px',             // grid item width in pixel, default: 220px
           max_width: '',              // dynamic gird item width if specified, (pixel)
           resizable: true,            // re-layout if window resize
           transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
      }
     if(gallery){gallery.gridify(options);}
 }



  Element.prototype.imagesLoaded = function (cb){
    var images = this.querySelectorAll('img');
    var count = images.length;
    if (count == 0) cb();
    for (var i= 0, length = images.length; i < length; i++)
    {
        var image = new Image();
        image.onload = image.onerror = function(e){
            count --;
            if (count == 0) cb()
        }
        image.src = images[i].getAttribute('src');
    }
  }
  Element.prototype.gridify = function (options)
  {
    var self = this,
        options = options || {},
        indexOfSmallest = function (a) {
            var lowest = 0;
            for (var i = 1, length = a.length; i < length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            return lowest;
        },
        highestColumn = function (cols) {
            var highest = 0;
            for (var i = 0, length = cols.length; i < length; i++) {
                if (cols[i] > highest) highest = cols[i];
            }
            return highest;
        },
        attachEvent = function(node, event, cb)
        {
            if (node.attachEvent)
                node.attachEvent('on'+event, cb);
            else if (node.addEventListener)
                node.addEventListener(event, cb);
        },
        detachEvent = function(node, event, cb)
        {
            if(node.detachEvent) {
                node.detachEvent('on'+event, cb);
            }
            else if(node.removeEventListener) {
                node.removeEventListener(event, render);
            }
        },
        render = function()
        {
            self.style.position = 'relative';
            var items = self.querySelectorAll(options.srcNode),
                transition = (options.transition || 'all 0.5s ease') + ', height 0, width 0',
                width = self.clientWidth,
                item_margin = parseInt(options.margin || 0),
                item_width = parseInt(options.max_width || options.width || 220),
                column_count = Math.max(Math.floor(width/(item_width + item_margin)),1),
                left = column_count == 1 ? item_margin/2 : (width % (item_width + item_margin)) / 2,
                columns = [];
            if (options.max_width)
            {
                column_count = Math.ceil(width/(item_width + item_margin));
                item_width = (width - column_count * item_margin - item_margin)/column_count;
                left = item_margin/2;
            }
            for (var i = 0; i < column_count; i++)
            {
                columns.push(0);
            }
            for (var i= 0, length = items.length; i < length; i++)
            {
                var idx = indexOfSmallest(columns);
                items[i].setAttribute('style', 'width: ' + item_width + 'px; ' +
                    'position: absolute; ' +
                    'margin: ' + item_margin/2 + 'px; ' +
                    'top: ' + (columns[idx] + item_margin/2) +'px; ' +
                    'left: ' + ((item_width + item_margin) * idx + left) + 'px; ' +
                    'transition: ' + transition);

                columns[idx] += items[i].clientHeight + item_margin;
            }
            self.style.height = highestColumn(columns)+'px';
        };
    this.imagesLoaded(render);
    if (options.resizable)
    {
        attachEvent(window, 'resize', render);
        attachEvent(self, 'DOMNodeRemoved', function(){
            detachEvent(window, 'resize', render);
        })
    }
}

function PopUp()
{
  var blok = document.getElementById('win');
  var mes = document.getElementById('message');
  blok.style.display="block";
  mes.style.display="block";
  var op=0;
  var st=3;
  var delay=30;
  window.setInterval(function(){

      if(op<100){ 
       op=op+st;
       blok.style.opacity=op/100;
       mes.style.opacity=op/100;}

     }, delay);
}

function Hid()
{
  document.getElementById('win').style.display="none";
  document.getElementById('win').style.opacity=0;
  document.getElementById('message').style.display="none";
  document.getElementById('message').style.opacity=0;
}