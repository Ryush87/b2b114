var formObj=document.sell_form;

//autosave
function fnc_autosave()
{
	fnc_selcheck();
	fnc_pricecheck("addSell");
	new Ajax.Request
	(
		'./_proposal_autosave.html', {
			method: 'post',
			parameters: {
				'proposal_uid':formObj.proposal_uid.value
				, 'fld_title':formObj.fld_title.value
				, 'fld_contents':formObj.fld_contents.value
				, 'fld_open_level':formObj.fld_open_level.value
				, 'fld_payment_type':formObj.fld_payment_type.value
				, 'fld_use':formObj.fld_use.value
				, 'fld_season':formObj.fld_season.value
				, 'fld_theme_color':formObj.fld_theme_color.value
				, 'fld_age':formObj.fld_age.value
				, 'fld_buyer_upjong':formObj.fld_buyer_upjong.value
				, 'fld_character':formObj.fld_character.value
				, 'fld_sex':formObj.fld_sex.value
				, 'fld_print':formObj.fld_print.value
				, 'fld_sample':formObj.fld_sample.value
				, 'fld_delivery':formObj.fld_delivery.value
				, 'fld_price':formObj.fld_price.value
				, 'fld_ea':formObj.fld_ea.value
				, 'fld_view_permit':formObj.fld_view_permit.value
				, 'del_price':formObj.del_price.value
				, 'del_ea':formObj.del_ea.value
				, 'del_view_permit':formObj.del_view_permit.value
			}, 
			onComplete: function(httpObj) { 
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
			if(t==0){
				priceData[idx][t]=jQuery(this).parent().find('tr').eq(idx).find('.priceData').eq(t).attr('value');
			}else{
				priceData[idx][t]=jQuery(this).parent().find('tr').eq(idx).find('.priceData').eq(t).text();
			}
		}
	});
	var ea=new Array;
	var price=new Array;
	var view_permit=new Array;
	if(act=="addSell"){
		for(p=0;p<priceData.length;p++){
			view_permit[p]=priceData[p][0];
			ea[p]=unnum(priceData[p][1]);
			price[p]=unnum(priceData[p][2]);
		}
		formObj.fld_view_permit.value=view_permit;
		formObj.fld_ea.value=ea;
		formObj.fld_price.value=price;
		//alert(view_permit+"_"+ea+"_"+price);
	}else if(act=="delSell"){
		targetLine=targetLine;
		view_permit[0]=unnum(priceData[targetLine][0]);
		ea[0]=unnum(priceData[targetLine][1]);
		price[0]=unnum(priceData[targetLine][2]);
		
		formObj.del_view_permit.value=view_permit;
		formObj.del_price.value=price;
		formObj.del_ea.value=ea;
		//alert(formObj.del_view_permit.value+"_"+formObj.del_price.value+"_"+formObj.del_ea.value);
	}
}

//팝업조건 값체크
function fnc_selcheck(){
	var popDivBox=jQuery('#proposalInfoBox table tbody td');
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
	formObj.fld_age.value=ageInfo;
	formObj.fld_sex.value=sexInfo;
	formObj.fld_season.value=seasonInfo;
	formObj.fld_buyer_upjong.value=buyer_upjongInfo;
	formObj.fld_theme_color.value=theme_colorInfo;
	formObj.fld_character.value=characterInfo;
	
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

/* suggest_write.html */
//input 입력값 체크
function fnc_priceInputCheck(obj,priS,priE){
	var tempReturn=new Array
	var tempInput=new Array
	var inputTitle = new Array('수량','제안가','수량') ;
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
	tempReturn[2]=true;
	jQuery('.priceInputResultBox table tbody').find('tr').each(function(i){
		var tempS=jQuery(this).find('.priceData').eq(0).html();
		var tempE=jQuery(this).find('.priceData').eq(1).html();
		if(priS==tempS&&priE==tempE){
			alert('이미 입력하신 단가입니다');
			obj.eq(1).val("");
			obj.eq(0).val("").focus();
			tempReturn[2]=false;
			return false;
		}
	});
	//alert(tempReturn[0]+"__"+tempReturn[1]+"__"+tempReturn[2])
	if(tempReturn[0]&&tempReturn[1]&&tempReturn[2]){
		return true;
	}else{
		return false;
	}
}

//제안서 수량 및 제안가 입력
function fnc_AddCodePrice2(){
	var priceInputBox=jQuery('.priceInputBox').find('input:text');
	var priceSelectBox=jQuery('.priceInputBox').find('select');
	var tempTable=jQuery('.priceInputResultBox table tbody');
	fnc_getPriceLine(tempTable);
	if(fnc_priceInputCheck(priceInputBox,priceInputBox.eq(0).val(),priceInputBox.eq(1).val())){
		tempHtml="";
		tempHtml+='<tr>';
		tempHtml+='<td><span class="numBox">'+ (lineNum+1)+'</span></td>';
		tempHtml+='<td class="aCenter textC999 textBold">공개등급</td>';
		tempHtml+='<td class="aCenter"><span class="priceData" value="'+priceSelectBox.find('option:selected').attr('value')+'">'+priceSelectBox.find('option:selected').text()+'</span></td>';
		tempHtml+='<td class="aRight textC999 textBold">수량</td>';
		tempHtml+='<td class="aRight"><span class="priceData">'+priceInputBox.eq(0).val()+'</span> 개</td>';
		tempHtml+='<td class="aRight textC999 textBold">제안가</td>';
		tempHtml+='<td class="aRight"><span class="priceData">'+priceInputBox.eq(1).val()+'</span> 원</td>';
		tempHtml+='<td><div class="boxCloseBtn" onclick="fnc_DelPrice(jQuery(this),\'Sell\');"><i class="fa fa-times fa-lg"></i></div></td>';
		tempHtml+='</tr>';
		fnc_drawPriceLine("addSell",tempHtml,tempTable);
		fnc_inputReset(priceInputBox);
	}
	fnc_autosave();
}

function checkData(){
	fnc_selcheck();
	fnc_pricecheck("addSell");
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
	if(formObj.fld_price.value==""){
		alert ("수량 및 제안가가 하나라도 등록되어 있어야합니다");
		jQuery('.priceInputBox input').eq(0).val("").focus();
		return false;
	}
	fnc_autosave();
	formObj.work.value = "proposal_execute";
	formObj.submit();
}



