let catalog=
[
{
"code":"sony",
"name":"SONY HEADPHONE",
"description":" Sony WH1000Xm4/B Noise Cancellation Wireless Over-Ear Headphones Without Mic and Voice Control, Black.",
"link":"headphones.html",
"image":"sony4.png",
"price":260.99
 },
 {
"code":"hp",
"name":"HP ENVY",
"description":"2020 HP Envy x360 2-in-1 15.6 FHD Touch Laptop Computer, 10th Intel Core i7-10510U, 32GB RAM, 1TB PCie SSD, HD Webcam.",
"link":"hplaptop.html",
"image":"hp-envypicture3.png",
"price":750.99
 },
 {
"code":"samsung",
"name":"SAMSUNG TV",
"description":"SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart Tv.",
"link":"samsung.html",
"image":"tv4.png",
"price":600.99
 },
 {
"code":"refrigerator",
"name":"COMPACT REFRIGERATOR",
"description":"Compact refrigerator, TACKLIFE Mini Fridge with Freezer, 3.2 Cu.Ft, Silence, 1 Door Black, Ideal for Bedroom, Office, Dorm, RV.",
"link":"fridge.html",
"image":"fridge3.png",
"price":150.99
 }
];


function storecart()
{
	var flag=false,cart="",userid=getCookie("whoami")+"cart";
	for(var i=0;i<catalog.length;i++)
	{
		var qty=getCookie(catalog[i].code);
		if(qty>=1)
		{
			cart=cart+(catalog[i].code+":"+qty+"-");
			flag=true;
		}
	}
	if(flag==true)
	{
		cart=cart.substring(0,cart.length-1);
		setCookie(userid,cart,30);
	}
}

function loadcart()
{
	var cart=getCookie("whoami");
	if(cart!=null)
	{
		cart=cart+"cart";
		var items=getCookie(cart);
		if(items!=null)
		{
			items=items.split("-");
			for(var i=0;i<items.length;i++)
			{
				var item=items[i].split(":");
				setCookie(item[0],item[1],30);
			}
		}
	}
}
