var formObj=document.buy_form;

//autosave
function fnc_autosave()
{
	fnc_selcheck();
	fnc_pricecheck("addBuy");
	new Ajax.Request
	(
		'./_announce_autosave.html', {
			method: 'post',
			parameters: {
				'request_uid':formObj.request_uid.value
				,'fld_title':formObj.fld_title.value
				, 'fld_contents':formObj.fld_contents.value
				, 'fld_price_s':formObj.fld_price_s.value
				, 'fld_price_e':formObj.fld_price_e.value
				, 'fld_ea':formObj.fld_ea.value
				, 'del_price_s':formObj.del_price_s.value
				, 'del_price_e':formObj.del_price_e.value
				, 'del_ea':formObj.del_ea.value
				, 'fld_buyer_name':formObj.fld_buyer_name.value
				, 'fld_end_date':formObj.fld_end_date.value
				, 'fld_order_date':formObj.fld_order_date.value
				, 'fld_delivery_date':formObj.fld_delivery_date.value
				, 'fld_use':formObj.fld_use.value
				, 'fld_age':formObj.fld_age.value
				, 'fld_sex':formObj.fld_sex.value
				, 'fld_season':formObj.fld_season.value
				, 'fld_buyer_upjong':formObj.fld_buyer_upjong.value
				, 'fld_theme_color':formObj.fld_theme_color.value
				, 'fld_request_category':formObj.fld_request_category.value
				, 'fld_reject_category':formObj.fld_reject_category.value
				, 'fld_character':formObj.fld_character.value
				, 'fld_print':formObj.fld_print.value
				, 'fld_sample':formObj.fld_sample.value
				, 'fld_brand_keyword':formObj.fld_brand_keyword.value
				, 'fld_delivery_type':formObj.fld_delivery_type.value
				, 'fld_payment_type':formObj.fld_payment_type.value
				, 'fld_payment_memo':formObj.fld_payment_memo.value
			}, 
			onComplete: function(httpObj) { 
				$('ID_view_autosave_msg1').innerHTML = httpObj.responseText; 
				$('ID_view_autosave_msg2').innerHTML = httpObj.responseText; 
				}
		}
	);
}

/* common */
//table tr html 배열화
var lineHtml=new Array;
var lineNum="";
var tempLineHtml="";
var tempHtml="";
function fnc_getPriceLine(tempTable){
	lineNum=tempTable.find('tr').length;
	tempTable.find('tr').each(function(i){
		lineHtml[i]="";
		lineHtml[i]="<tr>"+jQuery(this).html()+"</tr>";
	});
}

//table tr html 그리기
function fnc_drawPriceLine(act,code,target){
	tempLineHtml="";
	tempHtml="";
	if(act=="addBuy"){
		for(x=0;x<lineNum;x++){
			tempLineHtml+=lineHtml[x];
		}
		tempHtml=tempLineHtml+code;
	}
	if(act=="delBuy"){
		for(x=0;x<lineNum;x++){
			if(x!=code){
				tempLineHtml+=lineHtml[x];
			}
		}
		tempHtml=tempLineHtml;
	}
	if(act=="addSell"){
		for(x=0;x<lineNum;x++){
			tempLineHtml+=lineHtml[x];
		}
		tempHtml=tempLineHtml+code;
	}
	if(act=="delSell"){
		for(x=0;x<lineNum;x++){
			if(x!=code){
				tempLineHtml+=lineHtml[x];
			}
		}
		tempHtml=tempLineHtml;
	}
	target.html(tempHtml);
	fnc_priceNumReset(target);
}

//table tr html 삭제
function fnc_DelPrice(obj,act){
	if(confirm('삭제하시겠습니까?')){
		var targetLine=jQuery('.priceInputResultBox table tbody tr').index(obj.parent().parent());
		var tempTable=obj.parent().parent().parent();
		var tempAct="del"+act;
		fnc_getPriceLine(tempTable);
		fnc_pricecheck(tempAct,targetLine);
		fnc_drawPriceLine(tempAct,targetLine,tempTable);
		fnc_autosave();
	}
}

//table tr 값 체크
function fnc_pricecheck(act,targetLine){
	var priceData=new Array;
	var tempPriceLine=jQuery('.priceInputResultBox table tbody');
	tempPriceLine.find('tr').each(function(idx){
		priceData[idx]=new Array;
		for(t=0;t<3;t++){
			priceData[idx][t]=jQuery(this).parent().find('tr').eq(idx).find('.priceData').eq(t).text();
		}
	});
	var price_s=new Array;
	var price_e=new Array;
	var ea=new Array;
	var level=new Array;
	if(act=="addBuy"){
		for(p=0;p<priceData.length;p++){
			price_s[p]=unnum(priceData[p][0]);
			price_e[p]=unnum(priceData[p][1]);
			ea[p]=unnum(priceData[p][2]);
		}
		formObj.fld_price_s.value=price_s;
		formObj.fld_price_e.value=price_e;
		formObj.fld_ea.value=ea;
	}else if(act=="delBuy"){
		targetLine=targetLine;
		price_s[0]=unnum(priceData[targetLine][0]);
		price_e[0]=unnum(priceData[targetLine][1]);
		ea[0]=unnum(priceData[targetLine][2]);
		formObj.del_price_s.value=price_s;
		formObj.del_price_e.value=price_e;
		formObj.del_ea.value=ea;
		//alert(formObj.del_price_s.value+"_"+formObj.del_price_e.value+"_"+formObj.del_ea.value);
	}else if(act=="addSell"){
		for(p=0;p<priceData.length;p++){
			ea[p]=unnum(priceData[p][0]);
			price_s[p]=unnum(priceData[p][1]);
			level[p]=unnum(priceData[p][2]);
		}
		//formObj.del_price_s.value=ea;
		//formObj.del_price_e.value=price_s;
		//formObj.del_ea.value=level;
		//alert(ea+"_"+price_s+"_"+level);
	}else if(act=="delSell"){
		targetLine=targetLine;
		price_s[0]=unnum(priceData[targetLine][0]);
		price_e[0]=unnum(priceData[targetLine][1]);
		ea[0]=unnum(priceData[targetLine][2]);
		formObj.del_price_s.value=price_s;
		formObj.del_price_e.value=price_e;
		formObj.del_ea.value=ea;
		//alert(formObj.del_price_s.value+"_"+formObj.del_price_e.value+"_"+formObj.del_ea.value);
	}
}

//팝업조건 값체크
function fnc_selcheck(){
	var popDivBox=jQuery('.popDivBox');
	var array_popDivBoxData=new Array;
	var popDivBoxDataBox=popDivBox.find('div[selectListBoxId]');
	popDivBoxDataBox.each(function(idx,item){
		array_popDivBoxData[idx]=new Array;
		var tempDivBoxData=jQuery(this).find('.dataText');
		tempDivBoxData.each(function(iidx,iitem){
			if(jQuery(this).attr('type')=="checkbox"){
				if(this.checked){
					array_popDivBoxData[idx][iidx]=jQuery(this).val();
				}
			}
			if(jQuery(this).attr('type')=="radio"){
				if(this.checked){
					array_popDivBoxData[idx][iidx]=jQuery(this).val();
				}
			}
			if(jQuery(this).attr('type')=="text"){
				if(jQuery(this).val()!=""){
					array_popDivBoxData[idx][iidx]=jQuery(this).val();
				}
			}
			if(jQuery(this).parent().parent().attr('selectListBoxId')=="request_categoryInfo"||
			jQuery(this).parent().parent().attr('selectListBoxId')=="reject_categoryInfo"){
				if(jQuery(this).parent().parent().find('.selectedItem').length>0){
					array_popDivBoxData[idx][iidx]=jQuery(this).attr('catuid');
				}
			}
		});
	});
	for(x=0;x<popDivBoxDataBox.length;x++){
		var tempId=popDivBoxDataBox.eq(x).attr('selectListBoxId');
		var tempVar2="var "+tempId+"=new Array;";
		for(z=0;z<array_popDivBoxData[x].length;z++){
			if(array_popDivBoxData[x][z]!=undefined){
				if(tempVar2=="var "+tempId+"=new Array;"){
					tempVar2+=tempId+"+=array_popDivBoxData["+x+"]["+z+"];";
				}else{
					tempVar2+=tempId+"+='\,'+array_popDivBoxData["+x+"]["+z+"];";
				}
			}
		}
		eval(tempVar2);
	}
	formObj.fld_use.value=useInfo;
	formObj.fld_season.value=seasonInfo;
	formObj.fld_theme_color.value=theme_colorInfo;
	formObj.fld_age.value=ageInfo;
	formObj.fld_request_category.value=request_categoryInfo;
	formObj.fld_reject_category.value=reject_categoryInfo;
	formObj.fld_buyer_upjong.value=buyer_upjongInfo;
	formObj.fld_character.value=characterInfo;
	formObj.fld_sex.value=sexInfo;
/*		
	alert(
		"preview_useInfo = "+useInfo+"\n"+
		"preview_ageInfo = "+ageInfo+"\n"+
		"preview_sexInfo = "+sexInfo+"\n"+
		"preview_seasonInfo = "+seasonInfo+"\n"+
		"preview_buyer_upjongInfo = "+buyer_upjongInfo+"\n"+
		"preview_theme_colorInfo = "+theme_colorInfo+"\n"+
		"preview_request_categoryInfo = "+request_categoryInfo+"\n"+
		"preview_reject_categoryInfo = "+reject_categoryInfo+"\n"+
		"preview_characterInfo = "+characterInfo+"\n"+
		"preview_printInfo = "+printInfo+"\n"+
		"preview_sampleInfo = "+sampleInfo+"\n"+
		"preview_company_nameInfo = "+company_nameInfo+"\n"+
		"preview_brand_keywordInfo = "+brand_keywordInfo+"\n"+
		"preview_delivery_typeInfo = "+delivery_typeInfo+"\n"+
		"preview_payment_typeInfo = "+payment_typeInfo+"\n"+
		"preview_payment_memoInfo = "+payment_memoInfo+"\n"
	);
*/
}

/*pop_divbox.php*/
//상품군검색
function fnc_CatKeyIn(var_id,var_keyword){
	new Ajax.Request
	(
		'./_announce_category.html', {
			method: 'get',
			parameters: {
				'qkeyword':var_keyword
			}, 
			onComplete: function(httpObj) { 
				$(var_id).innerHTML = httpObj.responseText; 
				}
		}
	);
}

//PopDiv 영역 아이콘변경
function chagePopDivIcon(){
	var tempPreObj=jQuery('.previewInfoBox ul li');
	tempPreObj.each(function(){
		var tempObj=jQuery(this).attr('id').substr(8);
		if(jQuery(this).css('display')=='block'){
			if(tempObj=="ageInfo"||tempObj=="sexInfo"){tempObj="agesexInfo";}
			if(tempObj=="printInfo"||tempObj=="sampleInfo"){tempObj="printsampleInfo";}
			if(tempObj=="contentsInfo"||tempObj=="brand_keywordInfo"||tempObj=="delivery_typeInfo"||tempObj=="payment_typeInfo"||tempObj=="payment_memoInfo"){tempObj="etcInfo";}
			jQuery('div[popDivId='+tempObj+']').find('.fa').removeClass('fa-plus').addClass('fa-check');
		}else{
			if(jQuery(this).css('display')=='none'){
				jQuery('div[popDivId='+tempObj+']').find('.fa').removeClass('fa-check').addClass('fa-plus');
			}
			if(jQuery('#preview_ageInfo').css('display')=='none'&&jQuery('#preview_sexInfo').css('display')=='none'){
				tempObj="agesexInfo";
				jQuery('div[popDivId='+tempObj+']').find('.fa').removeClass('fa-check').addClass('fa-plus');
			}
			if(jQuery('#preview_printInfo').css('display')=='none'&&jQuery('#preview_sampleInfo').css('display')=='none'){
				tempObj="printsampleInfo";
				jQuery('div[popDivId='+tempObj+']').find('.fa').removeClass('fa-check').addClass('fa-plus');
			}
			if(jQuery('#preview_contentsInfo').css('display')=='none'
				&&jQuery('#preview_brand_keywordInfo').css('display')=='none'
				&&jQuery('#preview_delivery_typeInfo').css('display')=='none'
				&&jQuery('#preview_payment_typeInfo').css('display')=='none'
				&&jQuery('#preview_payment_memoInfo').css('display')=='none'){
				tempObj="etcInfo";
				jQuery('div[popDivId='+tempObj+']').find('.fa').removeClass('fa-check').addClass('fa-plus');
			}
		}
	});
}

//PopDiv 영역과 preview 영역 싱크
function syncPopData(obj){
	//input Type:checkbox,radio,text
	var checkNum;
	var targetPreview;
	var checkTotalNum;
	var tempObj=jQuery(obj).find('.selectListBox').find('input');
	tempObj.each(function(){
		var thisObjType =jQuery(this).attr('type');
		var tempSelectListBoxId=jQuery(this).parent().parent().attr('selectListBoxId');
		if(thisObjType=='checkbox'||thisObjType=='radio'){
			checkNum=jQuery(this).parent().parent().find('input').index(this);
			checkedNum=jQuery(this).parent().parent().find('input:checked').val();
			targetPreview="#preview_"+tempSelectListBoxId;
			checkTotalNum=jQuery(this).parent().parent().find('input:checked').length;
			if(checkTotalNum!=0){
				if((targetPreview=='#preview_printInfo'&&checkedNum==1)||(targetPreview=='#preview_sampleInfo'&&checkedNum==1)||(targetPreview=='#preview_delivery_typeInfo'&&checkedNum==1)||(targetPreview=='#preview_payment_typeInfo'&&checkedNum==1)){
					jQuery(targetPreview).css('display','none');
				}else{
					jQuery(targetPreview).css('display','block');
				}
				
			}else{
				
				jQuery(targetPreview).css('display','none');
			}
			if(this.checked){
				if((targetPreview=='#preview_printInfo'&&checkNum==0)||(targetPreview=='#preview_sampleInfo'&&checkNum==0)||(targetPreview=='#preview_delivery_typeInfo'&&checkNum==0)||(targetPreview=='#preview_payment_typeInfo'&&checkNum==0)){
					jQuery(targetPreview +' .selectedItem').eq(checkNum).removeClass('selectedItemAct').addClass('selectedItemHid');
				}else{
					jQuery(targetPreview +' .selectedItem').eq(checkNum).removeClass('selectedItemHid').addClass('selectedItemAct');
				}
			}else{
				jQuery(targetPreview +' .selectedItem').eq(checkNum).removeClass('selectedItemAct').addClass('selectedItemHid');
			}
		}else if(thisObjType=='text'){
			var tempObjText=jQuery(this).val();
			targetPreview="#preview_"+jQuery(this).parent().attr('selectListBoxId');
			if(tempObjText!=""){
				jQuery(targetPreview).css('display','block');
				jQuery(targetPreview +' .selectedItem').removeClass('selectedItemHid').addClass('selectedItemAct').find('.previewTextBox').html(tempObjText);
			}else{
				jQuery(targetPreview).css('display','none');
				jQuery(targetPreview +' .selectedItem').removeClass('selectedItemAct').addClass('selectedItemHid').find('.previewTextBox').html("");
			}
		}
	});	
	//search Type
	var tempObj2=jQuery(obj).find('.selectResultBox .selectedItem');
	var tempselectedItem="";
	var tempSelectListBoxId2=jQuery(obj).find('.selectResultBox').attr('selectListBoxId');
	targetPreview="#preview_"+tempSelectListBoxId2;
	jQuery(targetPreview +' .detailInfoBody').html("");
	if(tempObj2.length>0){
		jQuery(targetPreview).css('display','block');
		tempObj2.each(function(){
			var tempSelReText=jQuery(this).find('.selectResultText').html();
			tempselectedItem+='<div class="selectedItem"><div class="previewTextBox">'+tempSelReText+'</div><i class="fa fa-times delPreSelItem" onclick=\"delPreSelItemClick(this);\"></i></div>';
		});
		jQuery(targetPreview +' .detailInfoBody').html("").html(tempselectedItem).find('.selectedItem').addClass('selectedItemAct');
	}else{
		jQuery(targetPreview).css('display','none');
	}
	//Textarea Type
	var tempObj3=jQuery(obj).find('.selectListBox').find('textarea');
	var tempTextareaItem="";
	var tempSelectListBoxId3=tempObj3.parent().attr('selectListBoxId');
	targetPreview="#preview_"+tempSelectListBoxId3;
	if(tempObj3.val()!=""){
		jQuery(targetPreview).css('display','block');
		tempObj3.each(function(){
			var tempTextarea=tempObj3.val();
			tempTextareaItem=tempTextarea;
		});
		jQuery(targetPreview +' .selectedItem').removeClass('selectedItemHid').addClass('selectedItemAct').find('.previewTextBox').html(tempTextareaItem);
	}else{
		jQuery(targetPreview).css('display','none');
		jQuery(targetPreview +' .selectedItem').removeClass('selectedItemAct').addClass('selectedItemHid').find('.previewTextBox').html("");
	}
	chagePopDivIcon();
}

//preview item 삭제(input용)
jQuery('.delPreSelItem').click(function(){
	var delTempItem=jQuery(this).parent().parent().parent().attr('id').substr(8);
	var targetObj=jQuery('div[selectListBoxId='+delTempItem+']').find('input');
	var targetObj2=jQuery('div[selectListBoxId='+delTempItem+']').find('textarea');
	var targetObjType=targetObj.attr('type');
	if(targetObjType=="checkbox"){
		var checkNum=jQuery(this).parent().parent().find('.selectedItem').index(jQuery(this).parent());
		targetObj.eq(checkNum).prop('checked',false);
	}else if(targetObjType=="radio"){
		var checkNum=jQuery(this).parent().parent().find('.selectedItem').index(jQuery(this).parent());
		targetObj.eq(checkNum).prop('checked',false);
		targetObj.eq(0).prop('checked',true);
	}else if(targetObjType=="text"){
		targetObj.val("");
	}else{
		targetObj2.val("");
	}
	syncPopData(jQuery('div[selectListBoxId='+delTempItem+']').parent().parent().parent().parent().parent().parent());
	fnc_autosave();
});

//preview item 삭제(검색용)
function delPreSelItemClick(obj){
	var tempCatuId="";
	var tempDelNum=jQuery(obj).parent().parent().find('.selectedItem').index(jQuery(obj).parent());
	var tempTarget=jQuery(obj).parent().parent().parent().attr('id').substr(8);
	drawSelectResultBox("del",tempCatuId,tempDelNum,tempTarget);
	syncPopData(jQuery('div[selectListBoxId='+tempTarget+']').parent().parent().parent().parent().parent().parent());
	fnc_autosave();
}

//검색결과 영역
var tempSelResultList=new Array;
var itemNum="";
var tempSelRLHtml="";
var tempOldHtml="";
var tempChoiceHtml="";

//검색결과 item html 배열화
function getSelectResultBox(Starget){
	itemNum=jQuery('div[selectListBoxId='+Starget+']').find('.selectedItem').length;
	jQuery('div[selectListBoxId='+Starget+']').find('.selectedItem').each(function(i){
		tempSelResultList[i]="";
		tempSelResultList[i]+="<div class=\"selectedItem\">"+jQuery(this).html()+"</div>";
	});
}

//검색결과 item html 그리기
function drawSelectResultBox(act,Sval,Stxt,Starget){
	var titleHtml="<span>선택결과</span>";
	getSelectResultBox(Starget);
	tempOldHtml="";
	tempSelRLHtml="";
	switch(act){
		case "add":
			var tempHtml="<div class=\"selectedItem\"><div class=\"selectResultText dataText\" catuid=\""+Sval+"\">"+Stxt+"</div><i class=\"fa fa-times delSelItem\" onclick=\"delSelItemClick(this);\"></i></div>";
			for(x=0;x<itemNum;x++){
				if(tempHtml!=tempSelResultList[x]){
					tempOldHtml+=tempSelResultList[x];
				}else{
					alert("이미 선택하셨습니다");
				}
			}
			tempSelRLHtml=titleHtml+tempOldHtml+tempHtml;
			break;
		case "del":
			for(x=0;x<itemNum;x++){
				if(x!=Stxt){
					tempOldHtml+=tempSelResultList[x];
				}
			}
			tempSelRLHtml=titleHtml+tempOldHtml;
			break;
	}
	jQuery('div[selectListBoxId='+Starget+']').html(tempSelRLHtml);
}

//검색결과 item 선택
function searchItemChoice(obj){
	var tempVal=jQuery(obj).attr('catuid');
	var tempText=jQuery(obj).html();
	var tempTarget=jQuery(obj).parent().parent().parent().find('.selectResultBox').attr('selectListBoxId');
	drawSelectResultBox('add',tempVal,tempText,tempTarget);
	//jQuery('.searchListBox input[type=text]').val("");
	//jQuery('.previewList').html("");
}

//검색결과 item 삭제
function delSelItemClick(obj){
	var tempDelNum=jQuery(obj).parent().parent().find('.selectedItem').index(jQuery(obj).parent());
	var tempTarget=jQuery(obj).parent().parent().parent().find('.selectResultBox').attr('selectListBoxId');
	var tempCatuId=jQuery(obj).parent().find('.dataText').attr('catuid');
	drawSelectResultBox("del",tempCatuId,tempDelNum,tempTarget);
	fnc_autosave();
}

//popDivBox Buttons
jQuery('.popDivBgBox').click(function(){
	jQuery('.popDivBox').each(function(){
		syncPopData(jQuery(this));
	});
	allHidePopDivBox();
	fnc_autosave();
});
jQuery('.popCloseBtn').click(function(){
	hidePopDivBox(jQuery(this).parent());
	syncPopData(jQuery(this).parent());
	fnc_autosave();
});
jQuery('.popCancle').click(function(){
	hidePopDivBox(jQuery(this).parent().parent());
});
jQuery('.selComplete').click(function(){
	hidePopDivBox(jQuery(this).parent().parent());
	syncPopData(jQuery(this).parent().parent());
	fnc_autosave();
});
jQuery('.popReset').click(function(){
	jQuery(this).parent().parent().find('input[type="checkbox"]').prop("checked",false);
	jQuery(this).parent().parent().find('input[type="radio"]').prop("checked",false);
	jQuery(this).parent().parent().find('input[type="radio"]').eq(0).prop("checked",true);
	jQuery(this).parent().parent().find('input[type="radio"]').eq(2).prop("checked",true);
	jQuery(this).parent().parent().find('input[type="text"]').val("");
	jQuery(this).parent().parent().find('textarea').val("");
});
jQuery('.popDivBox').each(function(){
	syncPopData(jQuery(this));
});

/*announce_write.html*/
//input 입력값 체크
function fnc_priceInputCheck(obj,priS,priE){
	var tempReturn=new Array
	var tempInput=new Array
	var inputTitle = new Array('최저 단가','최고 단가','수량') ;
	obj.each(function(i){
		tempInput[i]=obj.eq(i).val();
		if(jQuery(this).val()==""){
			message = "[ " + inputTitle[i] + " ] 을 입력 해주십시요." ;
			alert(message);
			jQuery(this).val("").focus();
			return false;
		}else{
			tempReturn[i]=true;
		}
	});
	if(Number(unnum(tempInput[0]))>Number(unnum(tempInput[1]))){
		alert("[ " + inputTitle[0] + " ]가 "+"[ " + inputTitle[1] + " ]보다 "+" 높을 수 없습니다.");
		obj.eq(1).val("");
		obj.eq(0).val("").focus();
		return false;
	}else{
		tempReturn[3]=true;
	}
	tempReturn[4]=true;
	jQuery('.priceInputResultBox table tbody').find('tr').each(function(i){
		var tempS=jQuery(this).find('.priceData').eq(0).html();
		var tempE=jQuery(this).find('.priceData').eq(1).html();
		if(priS==tempS&&priE==tempE){
			alert('이미 입력하신 단가입니다');
			obj.eq(1).val("");
			obj.eq(0).val("").focus();
			tempReturn[4]=false;
			return false;
		}
	});
	//alert(tempReturn[0]+"__"+tempReturn[1]+"__"+tempReturn[2]+"__"+tempReturn[3]+"__"+tempReturn[4])
	if(tempReturn[0]&&tempReturn[1]&&tempReturn[2]&&tempReturn[3]&&tempReturn[4]){
		return true;
	}else{
		return false;
	}
}

//공고 단가 및 수량 입력
function fnc_AddCodePrice(){
	var priceInputBox=jQuery('.priceInputBox').find('input:text');
	var tempTable=jQuery('.priceInputResultBox table tbody');
	fnc_getPriceLine(tempTable);
	if(fnc_priceInputCheck(priceInputBox,priceInputBox.eq(0).val(),priceInputBox.eq(1).val())){
		tempHtml="";
		tempHtml+='<tr>';
		tempHtml+='<td><span class="numBox">'+ (lineNum+1)+'</span></td>';
		tempHtml+='<td><div class="textC999 textBold">단가</div></td>';
		tempHtml+='<td class="aRight"><span class="priceData">'+priceInputBox.eq(0).val()+'</span> 원</td>';
		tempHtml+='<td class="aRight">~</td>';
		tempHtml+='<td class="aRight"><span class="priceData">'+priceInputBox.eq(1).val()+'</span> 원</td>';
		tempHtml+='<td class="aRight"><div class="textC999 textBold">수량</div></td>';
		tempHtml+='<td class="aRight"><span class="priceData">'+priceInputBox.eq(2).val()+'</span>개</td>';
		tempHtml+='<td><div class="boxCloseBtn" onclick="fnc_DelPrice(jQuery(this),\'Buy\');"><i class="fa fa-times fa-lg"></i></div></td>';
		tempHtml+='</tr>';
		fnc_drawPriceLine("addBuy",tempHtml,tempTable);
		fnc_inputReset(priceInputBox);
	}
	fnc_autosave();
}

/* suggest_write.html */
//제안서 수량 및 제안가 입력
/*
function fnc_AddCodePrice2(){
	var priceInputBox=jQuery('.priceInputBox').find('input:text');
	var priceSelectBox=jQuery('.priceInputBox').find('select');
	var tempTable=jQuery('.priceInputResultBox table tbody');
	fnc_getPriceLine(tempTable);
	if(true){
		tempHtml="";
		tempHtml+='<tr>';
		tempHtml+='<td><span class="numBox">'+ (lineNum+1)+'</span></td>';
		tempHtml+='<td><span>수량</span><span class="priceData">'+priceInputBox.eq(0).val()+'</span> 개</td>';
		tempHtml+='<td><span>제안가</span><span class="priceData">'+priceInputBox.eq(1).val()+'</span> 원</td>';
		tempHtml+='<td><span>공개등급</span><span class="priceData">'+priceSelectBox.find('option:selected').text()+'</span></td>';
		tempHtml+='<td><div class="boxCloseBtn" onclick="fnc_DelPrice(jQuery(this),\'Sell\');"><i class="fa fa-times fa-lg"></i></div></td>';
		tempHtml+='</tr>';
		fnc_drawPriceLine("addSell",tempHtml,tempTable);
		fnc_inputReset(priceInputBox);
	}
	fnc_autosave();
}
*/

function checkData(){
	fnc_selcheck();
	fnc_pricecheck("addBuy");
	if(formObj.fld_title.value==""){
		alert ("제목을 입력해주세요");
		jQuery('#fld_title').val("").focus();
		return false;
	}
	/*
	if(formObj.fld_contents.value==""){
		alert ("내용을 입력해주세요");
		jQuery('fld_contents').val("").focus();
		return false;
	}
	*/
	if(formObj.fld_price_s.value==""){
		alert ("가격 및 수량이 하나라도 등록되어 있어야합니다");
		jQuery('.priceInputBox input').eq(0).val("").focus();
		return false;
	}
	fnc_autosave();
	formObj.work.value = "request_execute";
	formObj.submit();
}
