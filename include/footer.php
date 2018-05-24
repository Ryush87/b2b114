<div class="footerTop bgColor666">
	<div class="widthWrap">
		<ul class="ftMenuBox">
			<a href="<? echo $sub_companyNavT_0[0][1] ?>" target="<? echo $sub_companyNavT_0[0][2] ?>"><li><? echo $sub_companyNavT_0[0][0] ?></li></a>
			<a href="<? echo $sub_companyNavT_0[1][1] ?>" target="<? echo $sub_companyNavT_0[1][2] ?>"><li><? echo $sub_companyNavT_0[1][0] ?></li></a>
			<a href="<? echo $main_customerNavT[0][1] ?>" target="<? echo $main_customerNavT[0][2] ?>"><li><? echo $main_customerNavT[0][0] ?></li></a>
			<? if( $_SESSION[ssUID] >= 1) { ?>
				<? if($ArrThisMemberDefaultInfo[time_confirm_celno] >= 1000) { ?><li style="cursor:default;">휴대폰 인증완료</li><? } else { ?><a href='javascript:fnc_confirm_popup("cel");'><li><? echo $sub_memberNavT_0[5][0] ?></li></a><? }?>
				<? if($ArrThisMemberDefaultInfo[time_confirm_company] >= 1000) { ?><li style="cursor:default;">사업자 인증완료</li><? } else { ?><a href='javascript:fnc_confirm_popup("biz");'><li><? echo $sub_memberNavT_0[6][0] ?></li></a><? }?>
			<? } ?>
		</ul>
		<div id="scrollTopBtn"><i class="fa fa-chevron-up"></i> TOP</div>
	</div>
</div>
<div class="footerMiddle bgColor333">
	<div class="widthWrap">
		<ul class="ftInfoBox ftInfoBox1">
			<li>411-360 경기도 고양시 일산동구 백마로 195</li>
			<li>TEL 1588-1588</li>
			<li>FAX 031.902.7223</li>
			<li>master@b2b114.co.kr</li>
		</ul>
		<div class="ftInfoBox ftInfoBox2">Copyright <i class="fa fa-copyright"></i> B2B114. All rights reserved.</div>
	</div>
</div>
