/*
* @Author: Administrator
* @Date:   2018-09-19 00:22:58
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-19 00:27:30
*/
window.onload=function(){
	//header状态切换
	let header=document.querySelector("header");
	let header_a=document.querySelectorAll("header .h_c .h_c_r>ul a");
	let header_first_a=header_a[header_a.length-1];
	header_a.forEach((val)=>{
		val.onmouseover=function(){
			val.style.color="#19a6cb";
		}
		val.onmouseout=function(){
			val.style.color="#fff";	
		}
	});
	window.onscroll=function(){
		let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
			header_a.forEach((val)=>{
				val.onmouseover=function(){
					val.style.color="#19a6cb";
				}
				if(bodyTop>10){
					val.onmouseout=function(){
						val.style.color="#2a333c";	
					}	
				}
				if(bodyTop<10){
					val.onmouseout=function(){
						val.style.color="#fff";	
					}
				}		
			});
			if(bodyTop>10){
				header.style.background="#fff";
				header_a.forEach((val)=>{
					val.style.color="#2a333c";
				});
				header_first_a.style.color="#19a6cb";
				
			}
			if(bodyTop<10){
				header.style.background="rgba(0,0,0,0.3)";
				header_a.forEach((val)=>{
					val.style.color="#fff";
				});
				header_first_a.style.color="#19a6cb";
			}	
	}
}