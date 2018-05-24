<div class="barInfoBox">
	<ul>
		<li><div class="barBtnsBox" popDivId="useInfo" style="border-left:1px solid #aaa;">용도 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="agesexInfo">연령/성별 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="seasonInfo">계절 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="buyer_upjongInfo">업종 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="theme_colorInfo">컬러 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="request_categoryInfo" style="border-left:1px solid #aaa;">요청상품군 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="reject_categoryInfo">거절상품군 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="characterInfo">특징/특색 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="printsampleInfo">인쇄/샘플 <i class="fa fa-plus"></i></div></li>
		<li><div class="barBtnsBox" popDivId="etcInfo">기타정보 <i class="fa fa-plus"></i></div></li>
	</ul>
</div>
<div class="previewInfoBox">
	<ul>
		<li id="preview_useInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>용도</span></div>
			<div class="detailInfoBody">
				<? for($x2 = 0 ; $x2 < count($ArrUse) ; $x2++) { ?>
				<div class="selectedItem selectedItemHid"><?=$ArrUse[$x2]?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_ageInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>연령</span></div>
			<div class="detailInfoBody">
				<? for($x2 = 0 ; $x2 < count($ArrAge) ; $x2++) { ?>
				<div class="selectedItem selectedItemHid" id="IDV_age_<?=$ArrAge[$x2]?>"><?=$ArrAge[$x2]?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_sexInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>성별</span></div>
			<div class="detailInfoBody">
				<? for($x2 = 0 ; $x2 < count($ArrSex) ; $x2++) { ?>
				<div class="selectedItem selectedItemHid" id="IDV_sex_<?=$ArrSex[$x2]?>"><?=$ArrSex[$x2]?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_seasonInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>계절</span></div>
			<div class="detailInfoBody">
				<? for($x2 = 0 ; $x2 < count($ArrSeason) ; $x2++) { ?>
				<div class="selectedItem" id="IDV_season_<?=$ArrSeason[$x2]?>"><?=$ArrSeason[$x2]?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_buyer_upjongInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>업종</span></div>
			<div class="detailInfoBody">
				<? for($x2 = 0 ; $x2 < count($ArrBuyerUpjong) ; $x2++) { ?>
				<div class="selectedItem" id="IDV_buyer_upjong_<?=$ArrBuyerUpjong[$x2]?>"><?=$ArrBuyerUpjong[$x2]?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_theme_colorInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>컬러</span></div>
			<div class="detailInfoBody">
				<? for($x2 = 0 ; $x2 < count($ArrThemeColor) ; $x2++) { ?>
				<div class="selectedItem" id="IDV_theme_color_<?=$ArrThemeColor[$x2]?>"><?=$ArrThemeColor[$x2]?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_request_categoryInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>요청상품군</span></div>
			<div class="detailInfoBody">
			</div>
		</li>
		<li id="preview_reject_categoryInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>거절상품군</span></div>
			<div class="detailInfoBody">
			</div>
		</li>
		<li id="preview_characterInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>특징/특색</span></div>
			<div class="detailInfoBody">
				<? for($x2 = 0 ; $x2 < count($ArrCharacter) ; $x2++) { ?>
				<div class="selectedItem" id="IDV_character_<?=$ArrCharacter[$x2]?>"><?=$ArrCharacter[$x2]?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_printInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>인쇄</span></div>
			<div class="detailInfoBody">
				<? foreach($ArrPrint AS $fld => $val) { ?>
				<div class="selectedItem" id="IDV_print_<?=$ArrPrint[$x2]?>"><?=$val?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_sampleInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>샘플</span></div>
			<div class="detailInfoBody">
				<? foreach($ArrSample AS $fld => $val) { ?>
				<div class="selectedItem" id="IDV_sample_<?=$ArrSample[$x2]?>"><?=$val?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_contentsInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>공고내용</span></div>
			<div class="detailInfoBody">
				<div class="selectedItem" id="IDV_contents"><div class="previewTextBox"></div><i class="fa fa-times delPreSelItem"></i></div>
			</div>
		</li>
		<li id="preview_brand_keywordInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>참고브랜드</span></div>
			<div class="detailInfoBody">
				<div class="selectedItem" id="IDV_brand_keyword"><div class="previewTextBox"></div><i class="fa fa-times delPreSelItem"></i></div>
			</div>
		</li>
		<li id="preview_delivery_typeInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>납품방법</span></div>
			<div class="detailInfoBody">
				<? foreach($ArrDeliveryType AS $fld => $val) { ?>
				<div class="selectedItem" id="IDV_delivery_type_<?=$ArrDeliveryType[$x2]?>"><?=$val?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_payment_typeInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>결제조건</span></div>
			<div class="detailInfoBody">
				<? foreach($ArrPaymentType AS $fld => $val) { ?>
				<div class="selectedItem" id="IDV_payment_type_<?=$ArrPaymentType[$x2]?>"><?=$val?><i class="fa fa-times delPreSelItem"></i></div>
				<? } ?>
			</div>
		</li>
		<li id="preview_payment_memoInfo">
			<div class="detailInfoHead"><i class="fa fa-minus-square-o"></i><span>결제방법</span></div>
			<div class="detailInfoBody">
				<div class="selectedItem" id="IDV_payment_memo"><div class="previewTextBox"></div><i class="fa fa-times delPreSelItem"></i></div>
			</div>
		</li>
	</ul>
</div>