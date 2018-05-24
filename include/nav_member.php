<div id="headNavArea">
	<div class="headMiddle">
		<div class="widthWrap">
			<div id="logoBox"><a href="<? echo $main_indexNavT[0][1] ?>" target="<? echo $main_indexNavT[0][2] ?>"><img src="/skin/images/common/logo.png" alt="B2B114 LOGO" /></a></div>
			<ul id="navBox">
				<li style="padding-right:0;"><? echo $main_memberNavT[0][0] ?></li>
			</ul>
		</div>
	</div>
	<div class="headBottom bgColor333">
		<div class="widthWrap" style="position:relative;">
			<ul id="subNav" class="subNavBox" style="right:-15px;">
				<? if( $_SESSION[ssUID] >= 1) { ?>
					<a href="<? echo $sub_memberNavT_0[3][1] ?>" target="<? echo $sub_memberNavT_0[3][2] ?>"><li><? echo $sub_memberNavT_0[3][0] ?></li></a>
				<? } else { ?>
					<a href="<? echo $sub_memberNavT_0[0][1] ?>" target="<? echo $sub_memberNavT_0[0][2] ?>"><li><? echo $sub_memberNavT_0[0][0] ?></li></a>
					<a href="<? echo $sub_memberNavT_0[1][1] ?>" target="<? echo $sub_memberNavT_0[1][2] ?>"><li><? echo $sub_memberNavT_0[1][0] ?></li></a>
					<a href="<? echo $sub_memberNavT_0[4][1] ?>" target="<? echo $sub_memberNavT_0[4][2] ?>"><li><? echo $sub_memberNavT_0[4][0] ?></li></a>
				<? } ?>
				<? if( $_SESSION[ssUID] >= 1) { ?>
					<!-- <a href="<? echo $sub_memberNavT_0[7][1] ?>" target="<? echo $sub_memberNavT_0[8][2] ?>"><li><? echo $sub_memberNavT_0[7][0] ?></li></a> -->
				<? } ?>
			</ul>
		</div>
	</div>
</div>
