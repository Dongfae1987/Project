function setCookie(name,value,days)
{
	window.localStorage.setItem(name,value);
}
function setCookie2(name,value,days)
{
	window.localStorage.setItem(name,value);
}
function getCookie(name)
{
	return window.localStorage.getItem(name);
}	
function delCookie(name)
{
	window.localStorage.removeItem(name);
}
function addCookie(name)
{
	var qty=getCookie(name);
	if(qty==null) setCookie(name,"1",10);
	else
	{
		qty=parseInt(qty)+1;
		setCookie(name,qty,10);
	}
}
function delAllCookies()
{
	localStorage.clear();
}
const getJSONString = function(obj)
{
	return JSON.stringify(obj, null, 2);
}
function getRaw()
{
	return getJSONString(localStorage);
}
