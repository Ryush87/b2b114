// proposal view popup
	function fnc_proposalVP(uid)
	{
		var urlurl = "/bin/common/proposal_view_popup.html?proposal_uid="+uid;
		var proposal_view_popup = window.open(urlurl,'proposal_view_popup','left=0,top=0,width=950,height=800,scrollbars=1');
	}
	
// goodscompany view popup
	function fnc_goodscompanyVP(viewtype,uid)
	{
		var urlurl = "/bin/common/goodscompany_view_popup.html?viewtype="+viewtype+"&uid="+uid;
		var goodscompany_view_popup = window.open(urlurl,'goodscompany_view_popup','left=0,top=0,width=950,height=800,scrollbars=1');
	}

// infoBox : proposal call
	function fnc_infoBox_proposalCall(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_proposalCall.html', {
				method: 'post',
				parameters: {
					'uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_proposalCall').innerHTML = httpObj.responseText; 
						popInfoBox('proposalCall');
					}
			}
		);
	}

// infoBox : proposal call execute
	function fnc_proposalCall_execute(p_uid,r_uid,r_p_uid)
	{
		if($('ID_checkbox_proposalCall').checked)
		{
			new Ajax.Request
			(
				'/bin/_common/_infoBox_proposalCall.html', {
					method: 'post',
					parameters: {
						'proposal_uid':p_uid
						, 'request_uid':r_uid
						, 'request_price_uid':r_p_uid
					}, 
					onComplete: function(httpObj) { 
						var tempText="";
						tempText+="<table class='popDivTable' style='margin-top:20px;'>";
						tempText+="<tbody><tr><td class='resultMessageBox'>";
						tempText+="<b>제안(제안가 확인) 요청을 완료하였습니다.</b><br/>감사합니다.";
						tempText+="</td></tr></tbody>";
						tempText+="</table>";
						tempText+="<div class='popDivBtns'>";
						tempText+="<div class='btn btnWhite' onClick='javascript:allHidePopInfoBox();'>확인</div>";
						tempText+="</div>";
						$('ID_proposalCall').innerHTML = tempText; 
						popInfoBox('proposalCall');
					}
				}
			);
		}
		else
		{
			alert('동의하셔야 제안요청 할 수 있습니다.');
			$('ID_checkbox_proposalCall').focus();
		}
	}

// infoBox : seller info
	function fnc_infoBox_sellerInfo(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_sellerInfo.html', {
				method: 'post',
				parameters: {
					'uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_companyNameInfo').innerHTML = httpObj.responseText; 
						popInfoBox('companyNameInfo');
					}
			}
		);
	}
	function fnc_infoBox_sellerInfo_m(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_sellerInfo_m.html', {
				method: 'post',
				parameters: {
					'uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_companyNameInfo').innerHTML = httpObj.responseText; 
						popInfoBox('companyNameInfo');
					}
			}
		);
	}

// infoBox : buyer info
	function fnc_infoBox_buyerInfo(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_buyerInfo.html', {
				method: 'post',
				parameters: {
					'uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_companyNameInfo').innerHTML = httpObj.responseText; 
						popInfoBox('companyNameInfo');
					}
			}
		);
	}

// infoBox : brand info
	function fnc_infoBox_brandInfo(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_brandInfo.html', {
				method: 'post',
				parameters: {
					'uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_brandNameInfo').innerHTML = httpObj.responseText; 
						popInfoBox('brandNameInfo');
					}
			}
		);
	}
	function fnc_infoBox_brandInfo_m(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_brandInfo_m.html', {
				method: 'post',
				parameters: {
					'uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_brandNameInfo').innerHTML = httpObj.responseText; 
						popInfoBox('brandNameInfo');
					}
			}
		);
	}

// infoBox : sendProposalMsg
	function fnc_infoBox_sendProposalMsg(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_sendProposalMsg.html', {
				method: 'post',
				parameters: {
					'proposal_uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_sendProposalMsg').innerHTML = httpObj.responseText; 
						popInfoBox('sendProposalMsg');
					}
			}
		);
	}

// infoBox : prebotPriceInfo
	function fnc_infoBox_prebotPriceInfo(uid)
	{
		new Ajax.Request
		(
			'/bin/_common/_infoBox_prebotPriceInfo.html', {
				method: 'post',
				parameters: {
					'goods_uid':uid
				}, 
				onComplete: function(httpObj) { 
						$('ID_prebotPriceInfo').innerHTML = httpObj.responseText; 
						popInfoBox('prebotPriceInfo');
					}
			}
		);
	}

//browser check
function checkBrowser1(){
	/*
	document.write("애플리케이션 이름 : " + navigator.appName+ "<br>")
	document.write("브라우저 버전 : " + navigator.appVersion+ "<br>")
	document.write("브라우저 코드 이름 : " + navigator.appCodeName+ "<br>")
	document.write("User Agent : " + navigator.userAgent+ "<br>")
	document.write("사용하는 언어 : " + navigator.language+ "<br>")
	document.write("시스템 종류 : "+navigator.platform+ "<br>")
	*/
	var isie=(/msie/i).test(navigator.userAgent); //ie
	var isie6=(/msie 6/i).test(navigator.userAgent); //ie 6
	var isie7=(/msie 7/i).test(navigator.userAgent); //ie 7
	var isie8=(/msie 8/i).test(navigator.userAgent); //ie 8
	var isie9=(/msie 9/i).test(navigator.userAgent); //ie 9
	var isie10=(/msie 10/i).test(navigator.userAgent); //ie 10
	var isie11=(/msie 11/i).test(navigator.userAgent); //ie 11
	var isswing=(/Swing/i).test(navigator.userAgent);
	var isfirefox=(/firefox/i).test(navigator.userAgent); //firefox
	var isapple=(/applewebkit/i).test(navigator.userAgent); //safari,chrome
	var isopera=(/opera/i).test(navigator.userAgent); //opera
	var isios=(/(ipod|iphone|ipad)/i).test(navigator.userAgent);//ios
	var isipad=(/(ipad)/i).test(navigator.userAgent);//ipad
	var isandroid=(/android/i).test(navigator.userAgent);//android
	var device;
	//alert("isie6="+isie6+"//"+"isie7="+isie7+"//"+"isie8="+isie8+"//"+"isie9="+isie9+"//"+"isie10="+isie10+"//"+"isie11="+isie11+"//"+"isswing="+isswing);
	if(isswing){
		isie=false;
		isie6=false;
		isie7=false;
		isie8=false;
		isie9=false;
	}
	if(isie7 || isie8 || isie9){
		isie6=false;
	}
	if(isie9){
		isie=false;
	}
	if(isapple || isios || isipad || isandroid){
		//alert("모바일기기로 접속하였습니다.");
		//window.location = "";
		jQuery('#version1').css('display','block');
		jQuery('#version2').css('display','none');
	}else{
		if(isie7 || isie8){
			jQuery('#version1').css('display','none');
			jQuery('#version2').css('display','block');
		}else{
			jQuery('#version1').css('display','block');
			jQuery('#version2').css('display','none');
		}
		//alert("PC로 접속하였습니다.");
		//window.location = "";
	}
}

//device check
function checkBrowser2(){
	var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}
	return device_name;
	alert(device_name);
}

//string print
function writeVar(obj){
	document.write(obj);
}

//calender
function setDatePick(obj){
	jQuery('.fa-calendar').click(function(){
		jQuery(this).parent().find('input').datepicker("show");
	});
	jQuery("#"+obj).datepicker({
		dateFormat:'yy-mm-dd',
		showAnimation:'slide',
		showOtherMonths:true,
		selectOtherMonths:true,
		changeYear:true,
		changeMonth:true,
		showButtonPanel:true
	});
}

/* common */
//숫자체크
function fnc_numCheck(obj){
	if (/[^0-9,]/g.test(obj.value)){
		var text1 = obj.value.substring(0, obj.value.length - 1);
		alert("숫자만 입력해주시기바랍니다.");
		obj.value="";
		obj.focus();
		return false;
	}else{
		obj.value = number_format(obj.value);
	
	}
}

//원화변환
function number_format(input){
	input = input.replace(/,/g, "");
	var input = String(input);
	var reg = /(\-?\d+)(\d{3})($|\.\d+)/;
	if (reg.test(input)){
		return input.replace(reg, function(str, p1, p2, p3){
			return number_format(p1) + "," + p2 + "" + p3;
		});
	}else{
		return input;
	}
}

//원화변환
function num(str){
	var str = str.split(",").join("");
	var arr = str.split(".");
	var str = new Array();
	for (i=0;i<=arr[0].length-1;i++)
	{
		str[i]=arr[0].substr(arr[0].length-1-i,1);
		if(i%3==0 && i!=0) str[i]+=",";
	}
	str = str.reverse().join("")
	if (!arr[1]){return str;}
	else{return str+"."+arr[1];}
}

//[,]제거
function unnum(str){
	var tempStr = str.split(",").join("");
	return tempStr;
}

//input필드 리셋
function fnc_inputReset(obj){
	obj.each(function(i){
		jQuery(this).val("");
	});
}

//라인넘버링
function fnc_priceNumReset(obj){
	fnc_getPriceLine(obj);
	obj.find('tr').each(function(i){
		jQuery(this).find('.numBox').html(i+1);
	});
}

//popDivBox
function popDivBox(obj){
	var tempX=jQuery('#'+obj).width();
	var tempY=jQuery('#'+obj).height();
	jQuery('#'+obj).css('display','block').css('margin-top','-'+tempY/2+'px').css('margin-left','-'+tempX/2+'px').find('input').eq(0).focus();;
	jQuery('.popDivBgBox').css('display','block');
	document.body.style.overflow= 'hidden';
}
function popInfoBox(obj){
	var tempX=jQuery('#'+obj).width();
	var tempY=jQuery('#'+obj).height();
	jQuery('#'+obj).css('display','block').css('margin-top','-'+tempY/2+'px').css('margin-left','-'+tempX/2+'px').find('input').eq(0).focus();;
	jQuery('.popInfoBgBox').css('display','block');
	document.body.style.overflow= 'hidden';
}
function allHidePopInfoBox(){
	jQuery('.popInfoBox').css('display','none');
	jQuery('.popInfoBgBox').css('display','none');
	document.body.style.overflow= 'visible';
}
function allHidePopDivBox(){
	jQuery('.popDivBox').css('display','none');
	jQuery('.popDivBgBox').css('display','none');
	document.body.style.overflow= 'visible';
}
function hidePopDivBox(obj){
	jQuery(obj).css('display','none');
	jQuery('.popDivBgBox').css('display','none');
	document.body.style.overflow= 'visible';
}
function changeAgreement(){
	jQuery('#ID_agreement_check').val(1);
}
function alertFlash(){
	var obj=jQuery('.alertIcon2');
	var objStatus=obj.css('opacity');
	if(objStatus==0){
		obj.animate({opacity:1},200);
	}else if(objStatus==1){
		obj.animate({opacity:0},300);
	}
}
//button Action
function btnAction(){
	//header alertFlash
	setInterval(alertFlash,500);
	//index main Btns
	jQuery("#indexMainBtn1").hover(function(){
		//jQuery(".indexMainBtnBG1").removeClass('bgColorMC1');
		//jQuery(".indexMainBtnBG1").addClass('bgColorMC1_1');
	},function(){
		//jQuery(".indexMainBtnBG1").removeClass('bgColorMC1_1');
		//jQuery(".indexMainBtnBG1").addClass('bgColorMC1');
	});
	jQuery("#indexMainBtn2").hover(function(){
		//jQuery(".indexMainBtnBG2").removeClass('bgColorMC2');
		//jQuery(".indexMainBtnBG2").addClass('bgColorMC2_1');
	},function(){
		//jQuery(".indexMainBtnBG2").removeClass('bgColorMC2_1');
		//jQuery(".indexMainBtnBG2").addClass('bgColorMC2');
	});
	jQuery("#topMenuTextBox li:last-child").hover(function(){
		jQuery(this).find('.topMenuToggle').css('display','block');
		jQuery(this).find('.topMenuCon a').css('color','#fff');
	},function(){
		jQuery(this).find('.topMenuToggle').css('display','none');
		jQuery(this).find('.topMenuCon a').css('color','#ccc');
	});
	//top Buttons
	jQuery('#scrollTopBtn').click(function(){
		jQuery('body, html').animate({scrollTop:jQuery('body').offset().top},1000);
	});
	//show hide Button
	jQuery(".showArtCont").click(function(){
		jQuery(this).parent().parent().parent().find(".hideBox").removeClass("hideBox");
		jQuery(this).parent().addClass("hideBox");
	});
	jQuery(".viewDetailInfoBtn .btn").click(function(){
		jQuery(this).parent().parent().find(".previewDetailInfoBox").slideToggle();
		if(jQuery('.previewDetailInfoBox').height()>10){
			jQuery('.viewDetailInfoBtn button').html('상품상세보기');
		}else{
			jQuery('.viewDetailInfoBtn button').html('접기');
		}
	});
	jQuery(".sGoodsSearchToggle .btn").click(function(){
		var toggleTarget=jQuery('#sGoodsSearchToggleTarget');
		var targetCSS=toggleTarget.css('display');
		toggleTarget.slideToggle();
		if(targetCSS=="none"){
			jQuery(this).html('접기');
			jQuery(this).parent().parent().parent().parent().find('td').removeClass('bdBottom2MC1');
		}else{
			jQuery(this).html('상세검색펼치기');
			jQuery(this).parent().parent().parent().parent().find('td').addClass('bdBottom2MC1');
		}
	});
	//popDivBoxButton
	jQuery('.barBtnsBox').click(function(){
		var tempObj=jQuery(this).attr('popDivId');
		popDivBox(tempObj);
	});
	jQuery('.popDivCloseBtn').click(function(){
		hidePopDivBox(jQuery(this).parent());
	});
	//popInfoBoxButton
	/*
	jQuery('.popupInfoBox').click(function(){
		var tempObj=jQuery(this).attr('popDivId');
		popDivBox(tempObj);
	});
	*/
	jQuery('.popInfoBgBox').click(function(){
		allHidePopInfoBox();
	});
	jQuery('.popInfoCloseBtn').click(function(){
		allHidePopInfoBox();
	});
	jQuery('.popupInfoCloseBtn').click(function(){
		allHidePopInfoBox();
	});
	//popWinBoxButton
	jQuery('.popWinCloseBtn').click(function(){
		winClose();
	});
	jQuery('.popTab').click(function(){
		jQuery('.popTab').removeClass("actOnTab");
		jQuery(this).addClass("actOnTab");
		var popInfoName=jQuery(this).attr("popInfoName");
		jQuery('.popupListInfo').css('display','none');
		jQuery('.'+popInfoName).css('display','block');
	});
	jQuery('.popHeadBtn').click(function(){
		jQuery('body, html').animate({scrollTop:jQuery('body').offset().top},1000);
	});
}
function popupAgreeCheck(){
	popDivBox('provisionPopBox');
}
function absoluteShow(obj){
	jQuery(obj).parent().parent().parent().find(".hideBox").removeClass("hideBox");
	jQuery(obj).parent().addClass("hideBox");
}

//location href
function pageMove(URL,Target,valT,obj){
	var tempURL=URL;
	if(valT!=""&&valT!=undefined){
		tempURL+="?"+valT;
	}
	if(Target!=undefined&&Target!='_self'&&Target!='_blank'){
		window.open(Target).location.href=tempURL;
	}else if(Target=='_blank'){
		window.open('about:blank').location.href=tempURL;
	}else if(Target=='_self'||Target==undefined){
		location.href=tempURL;
	}
	//alert(obj.attr('href'))
	//var acriotnURL="http://naver.com";
	//obj.write acriotnURL; 
}

//windows close
function winClose(){
	window.close();
}

//windowsResize
function windowResize(){
	window.resizeTo(1000,screen.availHeight);
	opener.window.location.reload();
}

//announce_view page
//리스트에서 팝업 호출
function announceViewPopup(kind,valT){
	switch(kind){
		case "view":
			var viewUrl="announce_view_popupView.html?"+valT;
			var winName="popupView";
			break;
		case "goodsList":
			var viewUrl="announce_view_popupList_g.html?"+valT;
			var winName="popupList";
			break;
		case "companylist":
			var viewUrl="announce_view_popupList_c.html?"+valT;
			var winName="popupList";
			break;
		default:
			alert("팝업 정보가 없습니다");
			break;
	}
	var winWidth=1000;
	var winHeight=screen.availHeight-100;
	var winLeft=Math.floor((screen.availWidth-winWidth)/2);;
	var winTop=Math.floor((screen.availHeight-winWidth)/2);;
	var option="width="+winWidth+",height="+winHeight+",left="+winLeft+",top="+(winTop-100);
	window.open(viewUrl,winName,option);
}
function currentPriceRow(rowNum){
	jQuery('body, html').animate({scrollTop:jQuery('.announcePriceBox .apTitle').eq(rowNum-1).offset().top},500);
}

//helpBallon
var balloon;
function updateBalloonPosition(x,y){
	balloon.css({left:x+5,top:y+23});
}
function updateBalloonPosition_R(x,y){
	balloon.css({left:x-150,top:y+23});
}
function helpBalloon(){
	balloon=jQuery('<div class="balloonBox"><i class="fa fa-bullhorn"></i><span></span></div>').appendTo('body');
	jQuery('.balloonAct').each(function(){
		var element=jQuery(this);
		var text=element.attr('title');
		element.attr('title','');
		element.hover(function(event){
			balloon.find('span').text(text);
			updateBalloonPosition(event.pageX,event.pageY);
			balloon.show();
		},function(){
			balloon.hide();
		});
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX,event.pageY);
		});
	});
	jQuery('.balloonAct_R').each(function(){
		var element=jQuery(this);
		var text=element.attr('title');
		element.attr('title','');
		element.hover(function(event){
			balloon.find('span').text(text);
			updateBalloonPosition_R(event.pageX,event.pageY);
			balloon.show();
		},function(){
			balloon.hide();
		});
		element.mousemove(function(event){
			updateBalloonPosition_R(event.pageX,event.pageY);
		});
	});
}

//top Menu popup
function fnc_confirm_popup(wName,wValue){
	var tempUrl="";
	var tempOption="";
	switch(wName){
		case "cel":
			tempUrl = "/bin/member/member_confirm_celno.html?"+wValue;
			tempOption='left=0,top=0,width=500,height=550,scrollbars=1';
			break;
		case "biz":
			tempUrl = "/bin/member/member_confirm_bizno.html?"+wValue;
			tempOption='left=0,top=0,width=750,height=450,scrollbars=1';
			break;
		case "notification":
			tempUrl = "/bin/member/notification_index.html";
			tempOption='left=0,top=0,width=750,height=450,scrollbars=1';
			break;
	}
	window.open(tempUrl,'popWindow',tempOption);
}

// 스크랩 실행 함수정의
	function fnc_scrap(scrap_uid,section,id_name)
	{
		if(scrap_uid >= 1 || section.length >= 4 || id_name >= 4)
		{
			new Ajax.Request
			(
				'/bin/_common/scrap_execute.html', {
					method: 'get',
					parameters: {
						'scrap_uid':scrap_uid,
						'section':section
					}, 
					onComplete: function(httpObj) { 
						if( httpObj.responseText == "scrap" )
						{
							$(id_name).innerHTML = "<i class='fa fa-check-square-o'></i> 스크랩" ;
						}
						else
						{
							$(id_name).innerHTML = "<i class='fa fa-square-o'></i> 스크랩" ;
						}
					}
				}
			);
		}
	}


//popSpan
function popSpan(kind,obj,url){
	var orgHtml=jQuery(obj).html();
	var tempHtml="";
	tempHtml+=orgHtml;
	tempHtml+="<div class='popInfoDiv'>";
	tempHtml+="<table>";
	tempHtml+="<tr>";
	tempHtml+="<td>";
	tempHtml+="asdf";
	tempHtml+="</td>";
	tempHtml+="</tr>";
	tempHtml+="<tr>";
	tempHtml+="<td>";
	tempHtml+="asdf";
	tempHtml+="</td>";
	tempHtml+="</tr>";
	tempHtml+="<tr>";
	tempHtml+="<td>";
	tempHtml+="asdf";
	tempHtml+="</td>";
	tempHtml+="</tr>";
	tempHtml+="</table>";
	tempHtml+="</div>";
	jQuery(obj).html(tempHtml);
}

//window load 
jQuery(window).ready(function(){
	helpBalloon();
	btnAction();
	if(currentPageKind!="index"&&currentPageKind!="member"&&currentPageKind!="popwin"){
		checkPageNav();//nav.js
	}
});

