<div class="headTop bgColor000">
	<div class="widthWrap">
		<a href="<? echo $main_indexNavT[1][1] ?>" target="<? echo $main_indexNavT[1][2] ?>">
			<div id="buyTab" class="topTab" style="border-left:1px solid #999;"><? echo $main_indexNavT[1][0] ?></div>
		</a>
		<a href="<? echo $main_indexNavT[2][1] ?>" target="<? echo $main_indexNavT[2][2] ?>">
			<div id="sellTab" class="topTab"><? echo $main_indexNavT[2][0] ?></div>
		</a>
		<ul id="topMenuTextBox">
<? if( $_SESSION[ssUID] >= 1) { ?>
			<? if($ArrThisMemberDefaultInfo[time_confirm_celno] >= 1000) { ?>
			<? } else { ?>
			<a href='javascript:fnc_confirm_popup("cel");'>
				<li class="balloonAtc" title="휴대폰인증을 하지 않으셨습니다">
					<div class="topMenuCon" ><i class="fa fa-tablet fs14"></i></div>
					<div class="alertIcon"><i class="fa fa-exclamation"></i></div>
				</li>
			</a>
			<? }?>
			<? if($ArrThisMemberDefaultInfo[time_confirm_company] >= 1000) { ?>
			<? } else { ?>
			<a href='javascript:fnc_confirm_popup("biz");'>
				<li class="balloonAtc" title="사업자인증을 하지 않으셨습니다">
					<div class="topMenuCon balloonAtc"><i class="fa fa-building fs14"></i></div>
					<div class="alertIcon"><i class="fa fa-exclamation"></i></div>
				</li>
			</a>
			<? }?>
			<a href='javascript:fnc_confirm_popup("notification");'>
				<li>
					<div class="topMenuCon"><i class="fa fa-bell fs14"></i></div>
					<? 
						$Qry2 = "SELECT count(uid) FROM member_message WHERE receiver_uid=".$_SESSION[ssUID];
						$Qry2 .= " AND (fld_read_time IS NULL OR fld_read_time = '' OR fld_read_time = '0000-00-00 00:00:00' ) LIMIT 1";
						$Rlt2 = @mysql_query($Qry2,$Con);
						$cnt_msg = @mysql_result($Rlt2,0,0);
					?>
					<? if($cnt_msg >= 1) { ?>
					<div class="alertIcon2"><?=($cnt_msg>=100)?99:$cnt_msg?></div>
					<? } ?>
				</li>
			</a>
			<li>
				<div class="topMenuCon">
					<a href="<? echo $sub_memberNavT_0[3][1] ?>" target="<? echo $sub_memberNavT_0[3][2] ?>">
						<?=$ArrThisMemberDefaultInfo[fld_co_name]?> <?=( strlen($ArrThisMemberDefaultInfo[fld_name]) >= 1)?$ArrThisMemberDefaultInfo[fld_name]:$ArrThisMemberDefaultInfo[fld_id]?> <?=$ArrThisMemberDefaultInfo[fld_position]?>님 <i class="fa fa-caret-down"></i>
					</a>
				</div>
				<div class="topMenuToggle">
					<div class="tmtLineWrap">
						<div class="tmtLine"><a href="<? echo $sub_memberNavT_0[2][1] ?>" target="<? echo $sub_memberNavT_0[2][2] ?>"><? echo $sub_memberNavT_0[2][0] ?></a></div>
						<div class="tmtLine"><a href="<? echo $sub_memberNavT_0[3][1] ?>" target="<? echo $sub_memberNavT_0[3][2] ?>"><? echo $sub_memberNavT_0[3][0] ?></a></div>
					</div>
				</div>
			</li>
<? } else { ?>
			<li><a href="<? echo $sub_memberNavT_0[1][1] ?>" target="<? echo $sub_memberNavT_0[1][2] ?>"><? echo $sub_memberNavT_0[1][0] ?></a></li>
			<li><a href="<? echo $sub_memberNavT_0[0][1] ?>" target="<? echo $sub_memberNavT_0[0][2] ?>"><? echo $sub_memberNavT_0[0][0] ?></a></li>
<? } ?>
		</ul>
	</div>
</div>
