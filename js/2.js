function showPic(object_href) {
  if(!document.getElementById("imgid"))
    return true;
  imgid.src=object_href.href;
  if(!document.getElementById("description"))
    return false;
  if(object_href.getAttribute("title")) {
    var text ="点击了： " + object_href.title;
  }
  else {
	var text ="点击innerText为：" + object_href.innerText + " 的标签,title为空";
  }
  if(description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

function prepareGallery() {
	if(!document.getElementsByTagName)
    return false;
	if(!document.getElementById)
    return false;
	if(!document.getElementById("imagegallery"))
    return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		links[i].onclick = function() {
			return showPic(this);
		}
	}
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement)
{
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement ){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

addLoadEvent(prepareGallery);
