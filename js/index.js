/*
* @Author: Administrator
* @Date:   2018-09-18 08:37:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-20 16:49:08
*/
window.onload=function(){
	//header状态切换
	let header=document.querySelector("header");
	let header_a=document.querySelectorAll("header .h_c .h_c_r>ul a");
	let header_first_a=document.querySelector("header .h_c .h_c_r>ul a");
	console.log(header_first_a);
	header_a.forEach((val)=>{
		val.onmouseover=function(){
			val.style.color="#19a6cb";
		}
		val.onmouseout=function(){
			val.style.color="#fff";	
		}
	});
	// window.onscroll=function(){

		
	// }
	//轮播
	let oImg=document.querySelectorAll(".banner .items li");
	let Banner=document.querySelector(".banner");
	let widths=1349.33;
	let dots=document.querySelectorAll(".btns li");
	let prev=document.querySelector(".prev");
	let next=document.querySelector(".next");
	banner_lr(oImg,Banner,widths,dots,prev,next);
	//
	let des=document.querySelector(".des");
	let text_arr=["乐趣多多","亭亭玉立,香气悠远"];
	let timer=setInterval(move,2000);
	let num=0;
	function move(){
		num++;
		if(num==text_arr.length){
			num=0;
		}
		des.innerHTML=text_arr[num];
		animate(des,{opacity:1},function(){
			des.style.opacity=0;
		});
	}

	let first=document.querySelector(".first");
	let sec=document.querySelector(".sec");
	let three=document.querySelector(".three");
	let four=document.querySelector(".four");
	let five=document.querySelector(".five");
	let six=document.querySelector(".six");
	let seven=document.querySelector(".seven");
	let eight=document.querySelector(".eight");
	let list_ul_li=document.querySelectorAll(".list>ul>li");
	list_ul_li.forEach((val,index)=>{
		val.style.left="-300px";
		if((index+1)%2==0){
			val.style.left="300px";
		}
	});
	let first_top=first.offsetTop;
	let three_top=three.offsetTop;
	let five_top=five.offsetTop;
	let seven_top=seven.offsetTop;
	console.log(first,sec,three,four,five,six,seven,eight);
	let bodytop2;
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
			bodytop2=document.body.scrollTop||document.documentElement.scrollTop;
			list_ul_li.forEach((val)=>{
				if(bodytop2+window.innerHeight>=val.offsetTop){
					val.style.left=0;
					val.style.opacity=1;
				}
			});
			let f_top=document.querySelector(".flower .f_top");
			let f_top2=document.querySelector(".f_lan .f_top");
			let title=document.querySelector(".work .title");
			let f_top_arr=[];
			f_top_arr.push(f_top,f_top2,title);
			f_top_arr.forEach((val)=>{
				if(bodyTop+window.innerHeight/2>=val.offsetTop){
					val.style.top=0;
					val.style.opacity=1;
				}
			});
			let info=document.querySelector(".work .can_info");
			let map=document.querySelector(".map");
			if(bodyTop+window.innerHeight>info.offsetTop){
				info.style.top=0;
				info.style.opacity=1;
				map.style.top=0;
				map.style.opacity=1;
			}
		}





	
}
   