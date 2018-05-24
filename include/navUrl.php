<!--각 페이지명, URL, target 정보 -->
<?
	$main_indexNavT=array(
		0=>array('Home','/','_self'),
		1=>array('구매자','/bin/buy/goods_best.html','_self'),
		2=>array('판매자','/bin/sell/announce_list.html','_self'),
		3=>array('사이트관리','/bin/manager/index.html','_self')
	);
	$main_memberNavT=array(
		0=>array('회원서비스','#','_self')
	);
		$sub_memberNavT_0=array(
			0=>array('회원가입','/bin/member/join.html','_self'),
			1=>array('로그인','/bin/member/login.html','_self'),
			2=>array('로그아웃','/bin/member/logout.html','_self'),
			3=>array('회원정보','/bin/member/join_input.html?work=modify','_self'),
			4=>array('아이디/비밀번호찾기','/bin/member/find_loginInfo.html','_self'),
			5=>array('휴대폰인증','/bin/member/member_confirm_celno.html','_blank'),
			6=>array('사업자인증','/bin/member/member_confirm_bizno.html','sub'),
			7=>array('회원탈퇴','/bin/member/leave.html','_self')
		);
	$main_companyNavT=array(
		0=>array('서비스안내','/bin/company/introduce.html','_self')
	);
		$sub_companyNavT_0=array(
		//	0=>array('서비스소개','/bin/company/introduce.html','_self'),
		//	1=>array('가입안내','/bin/company/guide.html','_self'),
			0=>array('이용약관','/bin/company/provision.html','_self'),
			1=>array('개인정보처리방침','/bin/company/privacy.html','_self')
		);
	$main_customerNavT=array(
		0=>array('고객센터','/bin/customer/customer.html','_self')
	);
		$sub_customerNavT_0=array(
			0=>array('공지사항','/bin/customer/notice_list.html','_self'),
			1=>array('FAQ','/bin/customer/faq_list.html','_self'),
			2=>array('1:1문의','/bin/customer/customer.html','_self')
		);
	$main_buyNavT=array(
		0=>array('공고등록','/bin/buy/announce_write.html','_self'),
		1=>array('MY공고','/bin/buy/my_announce_list.html?qstatus=1','_self'),
		2=>array('스크랩','/bin/buy/my_scrap_list.html?view_tab=proposal','_self'),
		3=>array('상품검색','/bin/buy/goods_best.html','_self')
	);
		$sub_buyNavT_0=array();
		$sub_buyNavT_1=array(
			0=>array('게재중공고','/bin/buy/my_announce_list.html?qstatus=1','_self'),
			1=>array('마감공고','/bin/buy/my_announce_list.html?qstatus=2','_self')
		);
		$sub_buyNavT_2=array(
			0=>array('제안서','/bin/buy/my_scrap_list.html?view_tab=proposal','_self'),
			1=>array('상품','/bin/buy/my_scrap_list.html?view_tab=goods','_self'),
			2=>array('셀러','/bin/buy/my_scrap_list.html?view_tab=seller','_self')
		);
		$sub_buyNavT_3=array(
			0=>array('베스트20','/bin/buy/goods_best.html','_self'),
			1=>array('SMART검색','/bin/buy/goods_search.html','_self')
		);

	$main_sellNavT=array(
		0=>array('전체공고','/bin/sell/announce_list.html','_self'),
		1=>array('제안서등록','/bin/sell/proposal_write_step1.html','_self'),
		2=>array('MY제안서','/bin/sell/my_proposal_list.html','_self'),
		//3=>array('스크랩','/bin/sell/my_scrap_list.html?view_tab=announce','_self')
	);
		$sub_sellNavT_0=array();
		$sub_sellNavT_1=array();
		$sub_sellNavT_2=array();
		$sub_sellNavT_3=array(
			0=>array('공고','/bin/sell/my_scrap_list.html?view_tab=announce','_self'),
			1=>array('바이어','/bin/sell/my_scrap_list.html?view_tab=buyer','_self')
		);
?>
<script type="text/javascript">
	var main_indexNavT=new Array(
		['<?echo $main_indexNavT[0][0]?>','<?echo $main_indexNavT[0][1]?>','<?echo $main_indexNavT[0][2]?>'],
		['<?echo $main_indexNavT[1][0]?>','<?echo $main_indexNavT[1][1]?>','<?echo $main_indexNavT[1][2]?>'],
		['<?echo $main_indexNavT[2][0]?>','<?echo $main_indexNavT[2][1]?>','<?echo $main_indexNavT[2][2]?>'],
		['<?echo $main_indexNavT[3][0]?>','<?echo $main_indexNavT[3][1]?>','<?echo $main_indexNavT[3][2]?>']
	);

	var main_memberNavT=new Array(
		['<?echo $main_memberNavT[0][0]?>','<?echo $main_memberNavT[0][1]?>','<?echo $main_memberNavT[0][2]?>']
	);
		var sub_memberNavT_0=new Array(
			['<?echo $sub_memberNavT_0[0][0]?>','<?echo $sub_memberNavT_0[0][1]?>','<?echo $sub_memberNavT_0[0][2]?>'],
			['<?echo $sub_memberNavT_0[1][0]?>','<?echo $sub_memberNavT_0[1][1]?>','<?echo $sub_memberNavT_0[1][2]?>'],
			['<?echo $sub_memberNavT_0[2][0]?>','<?echo $sub_memberNavT_0[2][1]?>','<?echo $sub_memberNavT_0[2][2]?>'],
			['<?echo $sub_memberNavT_0[3][0]?>','<?echo $sub_memberNavT_0[3][1]?>','<?echo $sub_memberNavT_0[3][2]?>'],
			['<?echo $sub_memberNavT_0[4][0]?>','<?echo $sub_memberNavT_0[4][1]?>','<?echo $sub_memberNavT_0[4][2]?>'],
			['<?echo $sub_memberNavT_0[5][0]?>','<?echo $sub_memberNavT_0[5][1]?>','<?echo $sub_memberNavT_0[5][2]?>'],
			['<?echo $sub_memberNavT_0[6][0]?>','<?echo $sub_memberNavT_0[6][1]?>','<?echo $sub_memberNavT_0[6][2]?>'],
			['<?echo $sub_memberNavT_0[7][0]?>','<?echo $sub_memberNavT_0[7][1]?>','<?echo $sub_memberNavT_0[7][2]?>']
		);
	var main_companyNavT=new Array(
		['<?echo $main_companyNavT[0][0]?>','<?echo $main_companyNavT[0][1]?>','<?echo $main_companyNavT[0][2]?>']
	);
		var sub_companyNavT_0=new Array(
			['<?echo $sub_companyNavT_0[0][0]?>','<?echo $sub_companyNavT_0[0][1]?>','<?echo $sub_companyNavT_0[0][2]?>'],
			['<?echo $sub_companyNavT_0[1][0]?>','<?echo $sub_companyNavT_0[1][1]?>','<?echo $sub_companyNavT_0[1][2]?>']
			//['<?echo $sub_companyNavT_0[2][0]?>','<?echo $sub_companyNavT_0[2][1]?>','<?echo $sub_companyNavT_0[2][2]?>'],
			//['<?echo $sub_companyNavT_0[3][0]?>','<?echo $sub_companyNavT_0[3][1]?>','<?echo $sub_companyNavT_0[3][2]?>'] -->
		);
	var main_customerNavT=new Array(
		['<?echo $main_customerNavT[0][0]?>','<?echo $main_customerNavT[0][1]?>','<?echo $main_customerNavT[0][2]?>']
	);
		var sub_customerNavT_0=new Array(
//			['<?echo $sub_customerNavT_0[0][0]?>','<?echo $sub_customerNavT_0[0][1]?>','<?echo $sub_customerNavT_0[0][2]?>'],
//			['<?echo $sub_customerNavT_0[1][0]?>','<?echo $sub_customerNavT_0[1][1]?>','<?echo $sub_customerNavT_0[1][2]?>'],
			['<?echo $sub_customerNavT_0[2][0]?>','<?echo $sub_customerNavT_0[2][1]?>','<?echo $sub_customerNavT_0[2][2]?>']
		);
	var main_buyNavT=new Array(
		['<?echo $main_buyNavT[0][0]?>','<?echo $main_buyNavT[0][1]?>','<?echo $main_buyNavT[0][2]?>'],
		['<?echo $main_buyNavT[1][0]?>','<?echo $main_buyNavT[1][1]?>','<?echo $main_buyNavT[1][2]?>'],
		['<?echo $main_buyNavT[2][0]?>','<?echo $main_buyNavT[2][1]?>','<?echo $main_buyNavT[2][2]?>'],
		['<?echo $main_buyNavT[3][0]?>','<?echo $main_buyNavT[3][1]?>','<?echo $main_buyNavT[3][2]?>']
	);
		var sub_buyNavT_0=new Array();
		var sub_buyNavT_1=new Array(
			['<?echo $sub_buyNavT_1[0][0]?>','<?echo $sub_buyNavT_1[0][1]?>','<?echo $sub_buyNavT_1[0][2]?>'],
			['<?echo $sub_buyNavT_1[1][0]?>','<?echo $sub_buyNavT_1[1][1]?>','<?echo $sub_buyNavT_1[1][2]?>']
		);
		var sub_buyNavT_2=new Array(
			['<?echo $sub_buyNavT_2[0][0]?>','<?echo $sub_buyNavT_2[0][1]?>','<?echo $sub_buyNavT_2[0][2]?>'],
			['<?echo $sub_buyNavT_2[1][0]?>','<?echo $sub_buyNavT_2[1][1]?>','<?echo $sub_buyNavT_2[1][2]?>'],
			['<?echo $sub_buyNavT_2[2][0]?>','<?echo $sub_buyNavT_2[2][1]?>','<?echo $sub_buyNavT_2[2][2]?>']
		);
		var sub_buyNavT_3=new Array(
			['<?echo $sub_buyNavT_3[0][0]?>','<?echo $sub_buyNavT_3[0][1]?>','<?echo $sub_buyNavT_3[0][2]?>'],
			['<?echo $sub_buyNavT_3[1][0]?>','<?echo $sub_buyNavT_3[1][1]?>','<?echo $sub_buyNavT_3[1][2]?>']
		);

	var main_sellNavT=new Array(
		['<?echo $main_sellNavT[0][0]?>','<?echo $main_sellNavT[0][1]?>','<?echo $main_sellNavT[0][2]?>'],
		['<?echo $main_sellNavT[1][0]?>','<?echo $main_sellNavT[1][1]?>','<?echo $main_sellNavT[1][2]?>'],
		['<?echo $main_sellNavT[2][0]?>','<?echo $main_sellNavT[2][1]?>','<?echo $main_sellNavT[2][2]?>']
		//['<?echo $main_sellNavT[3][0]?>','<?echo $main_sellNavT[3][1]?>','<?echo $main_sellNavT[3][2]?>']
	);
		var sub_sellNavT_0=new Array();
		var sub_sellNavT_1=new Array();
		var sub_sellNavT_2=new Array();
		var sub_sellNavT_3=new Array(
			['<?echo $sub_sellNavT_3[0][0]?>','<?echo $sub_sellNavT_3[0][1]?>','<?echo $sub_sellNavT_3[0][2]?>'],
			['<?echo $sub_sellNavT_3[1][0]?>','<?echo $sub_sellNavT_3[1][1]?>','<?echo $sub_sellNavT_3[1][2]?>']
		);

</script>