var currentPageKind='index';//현재페이지종류(구매,판매)
var currentMainN='main';//현재페이지메뉴(메인메뉴)
var currentSubN='main';//현재페이지메뉴(하위메뉴)
var logoURL="'/skin/images/common/logo.png'";

//메인메뉴 그리기
function drawMainNav(pageKind){
	var tempHTML="";
	pageKind=pageKind.toLowerCase();
	if(pageKind=='buy'||pageKind=='sell'||pageKind=='company'||pageKind =='customer'||pageKind=='admin'){
		var tempTabID="#"+pageKind+"Tab";
		jQuery(tempTabID).addClass('actOn');
		for(ni=1;ni<=eval('main_'+pageKind+'NavT').length;ni++){
			tempHTML+="<a href='"+eval('main_'+pageKind+'NavT')[ni-1][1]+"' target='"+eval('main_'+pageKind+'NavT')[ni-1][2]+"'><li>"+eval('main_'+pageKind+'NavT')[ni-1][0]+"</li></a>";
		}
		if(pageKind=='buy'){
			jQuery('#navBox').addClass('tabBuy');
			jQuery('.headBottom').addClass('bgColorMC1');
		}else if(pageKind=='sell'){
			jQuery('#navBox').addClass('tabSell');
			jQuery('.headBottom').addClass('bgColorMC2');
		}else{
			jQuery('#navBox').addClass('tabMember');
			jQuery('.headBottom').addClass('bgColor333');
		}
		
		jQuery('#navBox').html(tempHTML);
	}else{
		alert('mainNav : currentPageKind을 확인하세요');
	}
	jQuery('#navBox a li').hover(function(){
		drawSubNav(currentPageKind,jQuery('#navBox a li').index(this));
	},function(){
	});
	jQuery('#headNavArea').mouseleave(function(){
		drawSubNav(currentPageKind,currentMainN);
		drawLocation(currentPageKind,currentMainN,currentSubN);;
	});
}

//하위메뉴 그리기
function drawSubNav(pageKind,mainMenuNum){
	pageKind=pageKind.toLowerCase();
	if(pageKind=='buy'||pageKind=='sell'||pageKind=='company'||pageKind=='customer'||pageKind=='admin'){
		if((!isNaN(mainMenuNum)&&mainMenuNum!='')||mainMenuNum=='0'){
			var tempSHTML="";
			for(sni=1;sni<=eval('sub_'+pageKind+'NavT_'+mainMenuNum).length;sni++){
				tempSHTML+="<a href='"+eval('sub_'+pageKind+'NavT_'+mainMenuNum+'[sni-1][1]')+"' target='"+eval('sub_'+pageKind+'NavT_'+mainMenuNum+'[sni-1][2]')+"'><li>"+eval('sub_'+pageKind+'NavT_'+mainMenuNum+'[sni-1][0]')+"</li></a>";
			}
			jQuery('#subNav').html(tempSHTML);
			var tempLeft=jQuery('#navBox a').eq(mainMenuNum).offset();
			if(eval('main_'+pageKind+'NavT').length==1){
				tempLeft=(tempLeft.left)-(jQuery('#subNav').width())+jQuery('#navBox a').eq(mainMenuNum).width()+15;
			}else{
				if(mainMenuNum>=eval('main_'+pageKind+'NavT').length-2){
					if(mainMenuNum==eval('main_'+pageKind+'NavT').length-1){
						tempLeft=(tempLeft.left)-(jQuery('#subNav').width())+jQuery('#navBox a').eq(mainMenuNum).width()+15;
					}else{
						tempLeft=(tempLeft.left)-(jQuery('#subNav').width())+jQuery('#navBox a').eq(mainMenuNum).width()-15;
					}
				}else{
					tempLeft=tempLeft.left+35;
				}
			}
			jQuery('#subNav').offset({left:tempLeft});
		}else if(mainMenuNum=="main"){
			jQuery('#subNav').html("");
		}else{
			alert('subNav : currentMainN을 확인하세요');
		}
	}else{
		alert('subNav : currentPageKind을 확인하세요');
	}
	
}

//현재위치 그리기
function drawLocation(pageKind,mainMenuNum,subMenuNum){
	pageKind=pageKind.toLowerCase();
	var tempHTML="";
	var tempSepa="<li class='sepaBg'></li>";
	tempHTML+="";
	tempHTML+="<a href="+main_indexNavT[0][1]+" target='"+main_indexNavT[0][2]+"'><li><i class='fa fa-home'></i></li></a>"+tempSepa;
	if(pageKind=="buy"){
		tempHTML+="<a href="+main_indexNavT[1][1]+" target='"+main_indexNavT[1][2]+"'><li>"+main_indexNavT[1][0]+"</li></a>"+tempSepa;
	}else if(pageKind=="sell"){
		tempHTML+="<a href="+main_indexNavT[2][1]+" target='"+main_indexNavT[2][2]+"'><li>"+main_indexNavT[2][0]+"</li></a>"+tempSepa;
	}else if(pageKind=="admin"){
		tempHTML+="<a href="+main_indexNavT[3][1]+" target='"+main_indexNavT[3][2]+"'><li>"+main_indexNavT[3][0]+"</li></a>"+tempSepa;
	}
	if((!isNaN(mainMenuNum)&&mainMenuNum!='')||mainMenuNum=='0'){
		tempHTML+="<a href="+eval('main_'+pageKind+'NavT')[mainMenuNum][1]+" target='"+eval('main_'+pageKind+'NavT')[mainMenuNum][2]+"'><li>"+eval('main_'+pageKind+'NavT')[mainMenuNum][0]+"</li></a>"+tempSepa;
	}
	if((!isNaN(subMenuNum)&&subMenuNum!='')||subMenuNum=='0'){
		if(eval('sub_'+pageKind+'NavT_'+mainMenuNum)!=""){
			var tempSubMenuLi=jQuery('#subNav a').eq(subMenuNum).find('li').html();
			if(tempSubMenuLi!=undefined){
				if(tempSubMenuLi.indexOf('script')==-1){
					tempHTML+="<a href="+eval('sub_'+pageKind+'NavT_'+mainMenuNum)[subMenuNum][1]+" target='"+eval('sub_'+pageKind+'NavT_'+mainMenuNum)[subMenuNum][2]+"'><li>"+eval('sub_'+pageKind+'NavT_'+mainMenuNum)[subMenuNum][0]+"</li></a>"+tempSepa;
				}else{
					var tempSubMenuText=tempSubMenuLi.split("</script>");
					tempHTML+="<a href="+jQuery('#subNav a').eq(subMenuNum).prop('href')+" target='"+jQuery('#subNav a').eq(subMenuNum).prop('target')+"'><li>"+tempSubMenuText[1]+"</li></a>"+tempSepa;
				}
			}
		}
	}
	jQuery('.localBox').html(tempHTML);
	jQuery('.localBox li').last().prev().addClass('currentLocal');
	jQuery(".subNavBox a").eq(subMenuNum).find('li').addClass('actOn');
}

//현재페이지인식
function checkPageNav(){
	drawMainNav(currentPageKind);
	drawSubNav(currentPageKind,currentMainN);
	drawLocation(currentPageKind,currentMainN,currentSubN);
	jQuery('#navBox a').eq(currentMainN).find('li').addClass('actOn');
}

function setCurrentPage(subN){
	var arraySubNav=new Array;
	for(i=0;i<jQuery('#subNav a').length;i++){
		arraySubNav[i]=jQuery('#subNav a').eq(i).find('li').html();
	}
	currentPageKind="member";
	currentMainN=0;
	currentSubN=arraySubNav.indexOf(subN);
	//alert(currentPageKind+"__"+currentMainN+"__"+currentSubN)
}