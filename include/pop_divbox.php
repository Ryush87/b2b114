<style type="text/css">
#useInfo {width:800px;}
#agesexInfo {width:600px;}
#seasonInfo {width:600px;}
#buyer_upjongInfo {width:600px;}
#theme_colorInfo {width:700px;}
#request_categoryInfo {width:600px;}
#reject_categoryInfo {width:600px;}
#characterInfo {width:600px;}
#printsampleInfo {width:600px;}
#etcInfo {width:600px;}
</style>

<? $helpText="선택한 항목이 없으면 모든 조건을 포함해서 검색합니다." ?>

<div class="popDivBgBox"></div>
<div id="useInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>용도</span></div>
	<div class="popDivContents">
		
		<div class="popDivBtnWrap">
			<span><?=$helpText?></span>
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="selectListBox" selectListBoxId="useInfo">
							<? for($x2 = 0 ; $x2 < count($ArrUse) ; $x2++) { ?>
							<label class="chechkbox-inline">
								<input type="checkbox" name="sel_use[<?=$x2?>]" value="<?=$ArrUse[$x2]?>"<?=(in_array($ArrUse[$x2],$arr_use))?" checked":null?> class="CLASS_sel_use dataText"/><?=$ArrUse[$x2]?>
							</label>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="agesexInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>연령/성별</span></div>
	<div class="popDivContents">
		<div class="popDivBtnWrap">
			<span><?=$helpText?></span>
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="selectListTitleBox">연령</div>
						<div class="selectListBox" selectListBoxId="ageInfo">
							<? for($x2 = 0 ; $x2 < count($ArrAge) ; $x2++) { ?>
							<label class="chechkbox-inline"><input type="checkbox" name="sel_age" value="<?=$ArrAge[$x2]?>" <?=(in_array($ArrAge[$x2],$arr_age))?" checked":null?> class="dataText"/><?=$ArrAge[$x2]?></label>
							<? } ?>
						</div>
						<div class="selectListTitleBox">성별</div>
						<div class="selectListBox" selectListBoxId="sexInfo">
							<? for($x2 = 0 ; $x2 < count($ArrSex) ; $x2++) { ?>
							<label class="chechkbox-inline"><input type="checkbox" name="sel_sex" value="<?=$ArrSex[$x2]?>" <?=(in_array($ArrSex[$x2],$arr_sex))?" checked":null?> class="dataText"/><?=$ArrSex[$x2]?></label>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="seasonInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>계절</span></div>
	<div class="popDivContents">
		<div class="popDivBtnWrap">
			<span><?=$helpText?></span>
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="selectListBox" selectListBoxId="seasonInfo">
							<? for($x2 = 0 ; $x2 < count($ArrSeason) ; $x2++) { ?>
							<label class="chechkbox-inline"><input type="checkbox" name="sel_season" value="<?=$ArrSeason[$x2]?>" <?=(in_array($ArrSeason[$x2],$arr_season))?" checked":null?> class="dataText"/><?=$ArrSeason[$x2]?></label>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="buyer_upjongInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>업종</span></div>
	<div class="popDivContents">
		<div class="popDivBtnWrap">
			<span><?=$helpText?></span>
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="selectListBox" selectListBoxId="buyer_upjongInfo">
							<? for($x2 = 0 ; $x2 < count($ArrBuyerUpjong) ; $x2++) { ?>
							<label class="chechkbox-inline"><input type="checkbox" name="sel_upjong" value="<?=$ArrBuyerUpjong[$x2]?>" <?=(in_array($ArrBuyerUpjong[$x2],$arr_buyer_upjong))?" checked":null?> class="dataText"/><?=$ArrBuyerUpjong[$x2]?></label>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="theme_colorInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>컬러</span></div>
	<div class="popDivContents">
		<div class="popDivBtnWrap">
			<span><?=$helpText?></span>
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="selectListBox" selectListBoxId="theme_colorInfo">
							<? for($x2 = 0 ; $x2 < count($ArrThemeColor) ; $x2++) { ?>
							<label class="chechkbox-inline"><input type="checkbox" name="sel_themecolor" value="<?=$ArrThemeColor[$x2]?>" <?=(in_array($ArrThemeColor[$x2],$arr_theme_color))?" checked":null?> class="dataText"/><?=$ArrThemeColor[$x2]?></label>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="request_categoryInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>요청상품군</span></div>
	<div class="popDivContents">
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="searchListBox">
							<input type="text" name="" class="form-control" placeholder="검색어를 입력해주세요" onKeyUp="JavaScript:fnc_CatKeyIn('IDV_request_category',this.value)"/>
							<div class="previewList" id="IDV_request_category"></div>
						</div>
						<br/>
						<div class="selectResultBox" selectListBoxId="request_categoryInfo">
							<span>선택결과</span>
							<?
								$arr_cat = (strlen(trim($request[fld_request_category])) >= 1)?explode(',',$request[fld_request_category]):null;
								for($tx = 0 ; $tx < count($arr_cat) ; $tx++)
								{
									$arr_cat2 = explode('|',$arr_cat[$tx]);
									
									switch(count($arr_cat2))
									{
										case 3 :
											$Qry2 = "SELECT A.fld_name AS cat1_name, B.fld_name AS cat2_name, C.fld_name AS cat3_name FROM goods_cat1 A, goods_cat2 B, goods_cat3 C WHERE A.uid=B.cat1_uid AND B.uid=C.cat2_uid AND C.uid=".$arr_cat2[2];
											$Rlt2 = @mysql_query($Qry2,$Con);
											$row2 = @mysql_fetch_array($Rlt2);
											$view_name = $row2[cat1_name] . " &gt; " . $row2[cat2_name] . " &gt; " . $row2[cat3_name];
										break;

										case 2 :
											$Qry2 = "SELECT A.fld_name AS cat1_name, B.fld_name AS cat2_name FROM goods_cat1 A, goods_cat2 B WHERE A.uid=B.cat1_uid AND B.uid=".$arr_cat2[1];
											$Rlt2 = @mysql_query($Qry2,$Con);
											$row2 = @mysql_fetch_array($Rlt2);
											$view_name = $row2[cat1_name] . " &gt; " . $row2[cat2_name];
										break;
										
										default :
											$Qry2 = "SELECT A.fld_name AS cat1_name FROM goods_cat1 A WHERE A.uid=".$arr_cat2[0];
											$Rlt2 = @mysql_query($Qry2,$Con);
											$row2 = @mysql_fetch_array($Rlt2);
											$view_name = $row2[cat1_name];
										break;
									}
							?>
							<div class="selectedItem"><div class="selectResultText dataText" catuid="<?=$arr_cat[$tx]?>"><?=$view_name?></div><i class="fa fa-times delSelItem" onclick="delSelItemClick(this);"></i></div>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="reject_categoryInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>거절상품군</span></div>
	<div class="popDivContents">
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="searchListBox">
							<input type="text" name="" class="form-control" placeholder="검색어를 입력해주세요" onKeyUp="JavaScript:fnc_CatKeyIn('IDV_reject_category',this.value)"/>
							<div class="previewList" id="IDV_reject_category"></div>
						</div>
						<br/>
						<div class="selectResultBox" selectListBoxId="reject_categoryInfo">
							<span>선택결과</span>
							<?
								$arr_cat = (strlen(trim($request[fld_reject_category])) >= 1)?explode(',',$request[fld_reject_category]):null;
								for($tx = 0 ; $tx < count($arr_cat) ; $tx++)
								{
									$arr_cat2 = explode('|',$arr_cat[$tx]);
									
									switch(count($arr_cat2))
									{
										case 3 :
											$Qry2 = "SELECT A.fld_name AS cat1_name, B.fld_name AS cat2_name, C.fld_name AS cat3_name FROM goods_cat1 A, goods_cat2 B, goods_cat3 C WHERE A.uid=B.cat1_uid AND B.uid=C.cat2_uid AND C.uid=".$arr_cat2[2];
											$Rlt2 = @mysql_query($Qry2,$Con);
											$row2 = @mysql_fetch_array($Rlt2);
											$view_name = $row2[cat1_name] . " &gt; " . $row2[cat2_name] . " &gt; " . $row2[cat3_name];
										break;
								
										case 2 :
											$Qry2 = "SELECT A.fld_name AS cat1_name, B.fld_name AS cat2_name FROM goods_cat1 A, goods_cat2 B WHERE A.uid=B.cat1_uid AND B.uid=".$arr_cat2[1];
											$Rlt2 = @mysql_query($Qry2,$Con);
											$row2 = @mysql_fetch_array($Rlt2);
											$view_name = $row2[cat1_name] . " &gt; " . $row2[cat2_name];
										break;
										
										default :
											$Qry2 = "SELECT A.fld_name AS cat1_name FROM goods_cat1 A WHERE A.uid=".$arr_cat2[0];
											$Rlt2 = @mysql_query($Qry2,$Con);
											$row2 = @mysql_fetch_array($Rlt2);
											$view_name = $row2[cat1_name];
										break;
									}
							?>
							<div class="selectedItem"><div class="selectResultText dataText" catuid="<?=$arr_cat[$tx]?>"><?=$view_name?></div><i class="fa fa-times delSelItem" onclick="delSelItemClick(this);"></i></div>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="characterInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>특징/특색</span></div>
	<div class="popDivContents">
		<div class="popDivBtnWrap">
			<span><?=$helpText?></span>
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="20%" /><col width="80%" /></colgroup>
			<tbody>
				<tr>
					<td colspan="2">
						<div class="selectListTitleBox">특징/특색</div>
						<div class="selectListBox" selectListBoxId="characterInfo">
							<? for($x2 = 0 ; $x2 < count($ArrCharacter) ; $x2++) { ?>
							<label class="chechkbox-inline"><input type="checkbox" value="<?=$ArrCharacter[$x2]?>" <?=(in_array($ArrCharacter[$x2],$arr_character))?" checked":null?> class="dataText"/><?=$ArrCharacter[$x2]?></label>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="printsampleInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>인쇄/샘플제공</span></div>
	<div class="popDivContents">
		<div class="popDivBtnWrap">
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<th>인쇄</th>
					<td>
						<div class="selectListBox" selectListBoxId="printInfo">
							<? foreach($ArrPrint AS $fld => $val) { ?>
							<label class="radio-inline"><input type="radio" name="fld_print" value="<?=$fld?>" class="dataText" <?=("$request[fld_print]"=="$fld")?" checked":null?>/><?=$val?></label>
							<? } ?>
						</div>
					</td>
				</tr>
				<tr>
					<th>샘플제출</th>
					<td>
						<div class="selectListBox" selectListBoxId="sampleInfo">
							<? foreach($ArrSample AS $fld => $val) { ?>
							<label class="radio-inline"><input type="radio" name="fld_sample" value="<?=$fld?>" class="dataText" <?=("$request[fld_sample]"=="$fld")?" checked":null?>/><?=$val?></label>
							<? } ?>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>

<div id="etcInfo" class="popDivBox">
	<div class="popCloseBtn"><i class="fa fa-times fa-2x"></i></div>
	<div class="popDivTitle"><span>기타정보</span></div>
	<div class="popDivContents">
		<div class="popDivBtnWrap">
			<div class="popDivBtnStyle btnWhite popReset">초기화</div>
		</div>
		<table class="popDivTable">
			<colgroup><col width="40%" /><col width="60%" /></colgroup>
			<tbody>
				<tr>
					<th>코멘트</th>
					<td>
						<div class="selectListBox" selectListBoxId="contentsInfo">
							<textarea name="fld_contents" id="fld_contents" cols="30" rows="4" class="form-control dataText" onBlur="fnc_autosave()" placeholder="내용을 입력해주십시오."><?=$request[fld_contents]?></textarea>
						</div>
					</td>
				</tr>
				<tr>
					<th>선호브랜드</th>
					<td>
						<div class="selectListBox" selectListBoxId="brand_keywordInfo">
							<input type="text" name="fld_brand_keyword" value="<?=$request[fld_brand_keyword]?>" class="form-control dataText"/>
						</div>
					</td>
				</tr>
				<tr>
					<th>납품방법</th>
					<td>
						<div class="selectListBox" selectListBoxId="delivery_typeInfo">
							<? foreach($ArrDeliveryType AS $fld => $val) { ?>
							<label class="radio-inline"><input type="radio" name="fld_delivery_type" value="<?=$fld?>" class="dataText" <?=("$request[fld_delivery_type]"=="$fld")?" checked":null?>/><?=$val?></label>
							<? } ?>
						</div>
					</td>
				</tr>
				<tr>
					<th>결제조건</th>
					<td>
						<div class="selectListBox" selectListBoxId="payment_typeInfo">
							<? foreach($ArrPaymentType AS $fld => $val) { ?>
							<label class="radio-inline"><input type="radio" name="fld_payment_type" value="<?=$fld?>" class="dataText" <?=("$request[fld_payment_type]"=="$fld")?" checked":null?>/><?=$val?></label>
							<? } ?>
						</div>
					</td>
				</tr>
				<tr>
					<th>결제방법</th>
					<td>
						<div class="selectListBox" selectListBoxId="payment_memoInfo">
							<input type="text" name="fld_payment_memo" value="<?=$request[fld_payment_memo]?>" class="form-control dataText"/>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="popDivBtns">
		<div class="btn btnMainC selComplete">선택완료</div>
	</div>
</div>
<script type="text/javascript" src="/skin/js/announceWriteAction.js"></script>