/*
* @Author: Administrator
* @Date:   2018-09-19 00:30:06
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-19 01:09:44
*/
window.onload=function(){
	let suggest=document.querySelector(".suggest");
	let down_box=document.querySelector(".down_box");
	let down_li=document.querySelectorAll(".down_box li");
	console.log(suggest);
	suggest.onmouseover=function(){
		down_box.style.display="block";
		setTimeout(function(){
			down_li.forEach((val)=>{
				val.style.left=0;
				val.style.opacity=1;
			});
		},100);
		
	}
	suggest.onmouseout=function(){
		down_box.style.display="none";
		down_li.forEach((val)=>{
			val.style.left="-100px";
			val.style.opacity=0;
		});
	}
}