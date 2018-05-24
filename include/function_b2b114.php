<?

	// 알림 메시지 생성 함수 정의
		function fnc_messageSend($section,$receiver_uid,$arr_var)
		{
			global $Con, $_SESSION;
			$Qry = "INSERT INTO member_message SET fld_section=".$section.", sender_uid=".$_SESSION[ssUID];
			$Qry .= ", receiver_uid=".$receiver_uid.", fld_send_time=NOW()";
			$Qry .= ( $arr_var[request_uid] >= 1 )?", request_uid=".$arr_var[request_uid]:null;
			$Qry .= ( $arr_var[request_price_uid] >= 1 )?", request_price_uid=".$arr_var[request_price_uid]:null;
			$Qry .= ( $arr_var[proposal_uid] >= 1 )?", proposal_uid=".$arr_var[proposal_uid]:null;
			$Qry .= ( $arr_var[proposal_price_uid] >= 1 )?", proposal_price_uid=".$arr_var[proposal_price_uid]:null;
			$Qry .= ( strlen($arr_var[fld_eval]) >= 1 )?", fld_eval='".$arr_var[fld_eval]."'":null;
			$Rlt = @mysql_query($Qry,$Con);
		}

	// 로그인 체크함수 정의
		function fnc_login_check()
		{
			global $Con, $_SESSION, $_SERVER, $open_window;
			
			if( strlen($_SESSION[ssUID]) <= 0 )
			{
				if($open_window == "YES")
				{
					$_SESSION[ssBEFORE_URL] = null;
					echo "<script language='JavaScript'>alert('선택하신 서비스는 로그인 후 이용 가능합니다.');opener.window.location.href='/bin/member/login.html';window.close();</script>";
				}
				else
				{
					$_SESSION[ssBEFORE_URL] = $_SERVER["REQUEST_URI"];
					echo "<script language='JavaScript'>alert('선택하신 서비스는 로그인 후 이용 가능합니다.');window.location.href='/bin/member/login.html';</script>";
				}
				session_register(ssBEFORE_URL);
				exit;
			}
		}

	// 배열값과 선택값을 비교해서 checked 처리 해주는 함수
		function fnc_compareChecked($ArrayVAR,$compareVAR)
		{
			for($x = 0 ; $x < count($arr) ; $x++)
			{
				if( trim($arr[$x]) == trim($var))
				{
					echo " checked ";
					break;
				}
			}
		}

	// 전화번호, 휴대폰번호 표시함수
		function fnc_TelnoAddHyphen($telno)
		{
			return preg_replace("/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/", "$1-$2-$3", $telno);
		}
		
	// 스크랩 검사 함수
		function fnc_checkScrap($scrap_uid,$section)
		{
			global $_SESSION, $Con ;

			$Qry = "SELECT uid FROM member_scrap WHERE member_uid=".$_SESSION[ssUID]." AND fld_section='$section' AND scrap_uid=".$scrap_uid;
			$Rlt = @mysql_query($Qry,$Con);
			$total_rows = @mysql_num_rows($Rlt);
			
			if( $total_rows >= 1 )
			{
				return "<i class='fa fa-check-square-o'></i> 스크랩";
			}
			else
			{
				return "<i class='fa fa-square-o'></i> 스크랩";
			}
		}
		
	// 옵션별 WHERE 절 만들어주는 함수
		function fnc_optionWhereCreate($arr_var,$fldname)
		{
			if(strlen($arr_var) >= 1)
			{
				$return_query = " AND ( ";
				$arr_tmp = explode(',',$arr_var);
				for($x=0;$x<count($arr_tmp);$x++)
				{
					$return_query .= ( $x >= 1 )?" OR ":null;
					$return_query .= " $fldname LIKE '%".$arr_tmp[$x]."%' ";
				}
				$return_query .= " ) ";
				return $return_query;
			}
		}
		
	// 시크릿 가격 표시하는 함수
		function fnc_secretPrice($num)
		{
			$num = number_format($num);
			$reseul_q = preg_replace('/[0-9]/','*',$num);
			$result = substr($num,0,1).substr($reseul_q,1,1000);
			return $result;			
		}

	// 시크릿 아이디 표시하는 함수
		function fnc_secretId($Id)
		{
			$Rvar = null;
			$id_len = strlen($Id) - 2;
			$Rvar = substr($Id,0,2);
			for($x = 0 ; $x < $id_len ; $x++)
			{
				$Rvar .= "*";
			}
			return $Rvar;			
		}

	// 제안가 표시하는 함수 (공개등급+회원등급 체크)
		function fnc_viewProposalPrice($ProposalPrice,$ProposalViewPermit,$uidInfo)
		{
			global $ArrThisMemberDefaultInfo, $Con, $request_uid, $request_price_uid;
			
			// 공고 고유번호가 있는 경우(공고 등록자 또는 제안서 등록자가 조회 하는 경우) 해당 공고의 회원정보로 재설정
				if($request_uid >= 1)
				{
					$regmem_uid = @mysql_result(@mysql_query("SELECT regmem_uid FROM request_default WHERE uid = ".$request_uid,$Con),0,0);
					$Qry2 = "SELECT *, UNIX_TIMESTAMP(fld_confirm_celno) AS time_confirm_celno, UNIX_TIMESTAMP(fld_confirm_company) AS time_confirm_company FROM member_default WHERE uid=".$regmem_uid;
					$Rlt2 = @mysql_query($Qry2,$Con);
					$ArrThisMemberDefaultInfo = @mysql_fetch_array($Rlt2);
				}
				$ATM = $ArrThisMemberDefaultInfo;

			switch($ProposalViewPermit)
			{
				case 0 : // 전체공개
					$rval[price] = number_format($ProposalPrice)." 원";
					$rval[text] = null;
					$rval[open] = true;
				break;
			
				case 1 : // 휴대폰 인증시 공개
					if($ATM[time_confirm_celno] >= 1000)
					{
						$rval[price] = number_format($ProposalPrice)." 원";
						$rval[text] = null;
						$rval[open] = true;
					}
					else
					{
						$rval[price] = fnc_secretPrice($ProposalPrice)." 원";
						$rval[text] = "<span onClick=\"JavaScript:fnc_confirm_popup('cel');\" class='listPermit pPermit_1 balloonAct' title='휴대폰 인증이 완료되면 즉시 제안가 확인이 가능합니다.'>가격확인 <i class='fa fa-caret-right'></i></span>";
						$rval[open] = false;
					}
				break;
			
				case 2 : // 사업자 인증시 공개
					if($ATM[time_confirm_company] >= 1000)
					{
						$rval[price] = number_format($ProposalPrice)." 원";
						$rval[text] = null;
						$rval[open] = true;
					}
					else
					{
						$rval[price] = fnc_secretPrice($ProposalPrice)." 원";
						$rval[text] = "<span onClick=\"JavaScript:fnc_confirm_popup('biz');\" class='listPermit pPermit_2 balloonAct' title='사업자 인증이 완료되면 즉시 제안가 확인이 가능합니다.'>가격확인 <i class='fa fa-caret-right'></i></span>";
						$rval[open] = false;
					}
				break;
			
				case 3 : // 사업자 회원 중 순수 BUYER 에게만 공개
					if($ATM[time_confirm_company] >= 1000)
					{
						// 제안서 등록건수 체크
							$proposal_count = @mysql_result(@mysql_query("SELECT count(uid) FROM proposal_default WHERE regmem_uid=".$ATM[uid],$Con),0,0);
							if($proposal_count <= 0)
							{
								$rval[price] = number_format($ProposalPrice)." 원";
								$rval[text] = null;
								$rval[open] = true;
							}
							else
							{
								$rval[price] = fnc_secretPrice($ProposalPrice)." 원";
								$rval[text] = "<span onClick=\"JavaScript:fnc_infoBox_proposalCall('".$uidInfo."')\" class='popupInfoBox listPermit pPermit_3 balloonAct' popDivId='PVPermit_3' title='제안서를 갖고 있지 않은 순수 바이어에게만 공개된 제안가 입니다. 확인을 원하시면 클릭하셔서 셀러에게 제안요청을 해주십시오.'>가격확인 <i class='fa fa-caret-right'></i></span>";
								$rval[open] = false;
							}
					}
					else
					{
						$rval[price] = fnc_secretPrice($ProposalPrice)." 원";
						$rval[text] = "<span onClick=\"JavaScript:fnc_confirm_popup('biz');\" class='listPermit pPermit_2 balloonAct' title='사업자 인증이 필요합니다.'>즉시확인 <i class='fa fa-caret-right'></i></span>";
						
					}
				break;
			
				case 4 : 
					$rval[price] = fnc_secretPrice($ProposalPrice)." 원";
					$rval[text] = "<span onClick=\"JavaScript:fnc_infoBox_proposalCall('".$uidInfo."')\" class='popupInfoBox listPermit pPermit_4 balloonAct' popDivId='PVPermit_4' title='비공개 제안가입니다. 클릭하셔서 셀러에게 제안요청을 해주십시오.'>가격확인 <i class='fa fa-caret-right'></i></span>";
					$rval[open] = false;
				break;
			}
			
			return $rval;
		}

	// 업체평가 점수 리턴하는 함수
		function fnc_coScore($co_uid)
		{
			global $Con ;
			
			$Qry = "SELECT * FROM member_default WHERE uid=".$co_uid;
			$Rlt = @mysql_query($Qry,$Con);
			$member = @mysql_fetch_array($Rlt) ;
			
			$return_score = 0;
			
			$return_score = $return_score + ( $member[fld_seller_reject] * -5 ); // 거절(-5점)
			$return_score = $return_score + ( $member[fld_seller_review] * 1 ); // 검토(+1점)
			$return_score = $return_score + ( $member[fld_seller_important] * 3 ); // 유력(+3점)
			
			return $return_score;			
		}
		
	// 공고/가격별 제안서 갯수 및 쿼리 가져오기
		function fnc_request2proposal($request_uid,$price_uid='',$seller_uid='')
		{
			global $Con, $_SESSION, $ArrThisMemberDefaultInfo;
			$returnVar[total] = 0;
			$returnVar[notview] = 0;
			$returnVar[scrap] = 0;
			$returnVar[selectQ] = $returnVar[fromQ] = $returnVar[whereQ] = null;
			$returnVar[member_confirm_celno] = null;
			$returnVar[member_confirm_company] = null;
			$returnVar[request_view_uid] = null;
			$returnVar[request_regdate] = null;
			$returnVar[request_regtime] = null;

			// 셀러 UID 가 넘어오면 셀러 쿼리 전송
				if( $seller_uid >= 1 ) $sellerQ = " AND A.regmem_uid=".$seller_uid;
			
			// 회원 정보
				#$Qry = "SELECT *, UNIX_TIMESTAMP(fld_confirm_celno) AS conf_celno, UNIX_TIMESTAMP(fld_confirm_company) AS conf_company FROM member_default WHERE uid=".$_SESSION[ssUID];
				#echo $Qry."<br/><br/>";
				#$Rlt = @mysql_query($Qry,$Con);
				$member = $ArrThisMemberDefaultInfo;
				$returnVar[member_confirm_celno] = $member[confirm_celno] = ($member[time_confirm_celno]>=1000)?"Y":"N";
				$returnVar[member_confirm_company] = $member[confirm_company] = ($member[time_confirm_company]>=1000)?"Y":"N";
				$openlevelQ = " AND ( A.fld_open_level=0 ";
				$openlevelQ .= ($member[confirm_celno]=="Y")?" OR A.fld_open_level=1":null;
				$openlevelQ .= ($member[confirm_company]=="Y")?" OR A.fld_open_level=2":null;
				$openlevelQ .= " ) ";
			
			// 공고 기본정보
				$Qry = "SELECT *, UNIX_TIMESTAMP(fld_regdate) AS fld_regtime FROM request_default WHERE uid=".$request_uid;
				$Rlt = @mysql_query($Qry,$Con);
				$request = @mysql_fetch_array($Rlt);
				$returnVar[request_regdate] = $request[fld_regdate];
				$returnVar[request_regtime] = $request[fld_regtime];
				
				// 결제조건
					$paymenttypeQ = ($request[fld_payment_type]==2)?" AND fld_payment_type=2 ":null;
				// 용도
					$useQ = fnc_optionWhereCreate($request[fld_use],'fld_use');
				// 계절
					$seasonQ = fnc_optionWhereCreate($request[fld_season],'fld_season');
				// 테마컬러
					$themecolorQ = fnc_optionWhereCreate($request[fld_theme_color],'fld_theme_color');
				// 연령
					$ageQ = fnc_optionWhereCreate($request[fld_age],'fld_age');
				// 업종
					$buyerupjongQ = fnc_optionWhereCreate($request[fld_buyer_upjong],'fld_buyer_upjong');
				// 특징
					$characterQ = fnc_optionWhereCreate($request[fld_character],'fld_character');
				// 성별
					$sexQ = fnc_optionWhereCreate($request[fld_sex],'fld_sex');
				// 인쇄가능
					$printQ = ($request[fld_print]==2)?" AND A.fld_print=2 ":null;
				// 샘플제출
					$sampleQ = ($request[fld_sample]==2)?" AND A.fld_sample=2 ":null;
				// 요청 상품군
					if( strlen($request[fld_request_category]) >= 1)
					{
						$requestcategoryQ = " AND ( ";
						$arr_cat = explode(',',$request[fld_request_category]);
						for($x=0;$x<count($arr_cat);$x++)
						{
							$requestcategoryQ .= ($x>=1)?" OR ":null;
							
							$arr_tmp = explode('|',$arr_cat[$x]);
							switch(count($arr_tmp))
							{
								case 3 :
									$requestcategoryQ .= " ( cat1_uid=".$arr_tmp[0]." AND cat2_uid=".$arr_tmp[1]." AND cat3_uid=".$arr_tmp[2]." )";
								break;

								case 2 :
									$requestcategoryQ .= " ( cat1_uid=".$arr_tmp[0]." AND cat2_uid=".$arr_tmp[1]." )";
								break;

								case 1 :
									$requestcategoryQ .= " ( cat1_uid=".$arr_tmp[0]." )";
								break;
							}
						}
						$requestcategoryQ .= " ) ";
					}
				// 거절 상품군
					if( strlen($request[fld_reject_category]) >= 1)
					{
						$arr_cat = explode(',',$request[fld_reject_category]);
						for($x=0;$x<count($arr_cat);$x++)
						{
							$arr_tmp = explode('|',$arr_cat[$x]);
							switch(count($arr_tmp))
							{
								case 3 :
									$rejectcategoryQ .= " AND NOT ( cat1_uid=".$arr_tmp[0]." AND cat2_uid=".$arr_tmp[1]." AND cat3_uid=".$arr_tmp[2]." )";
								break;

								case 2 :
									$rejectcategoryQ .= " AND NOT ( cat1_uid=".$arr_tmp[0]." AND cat2_uid=".$arr_tmp[1]." )";
								break;

								case 1 :
									$rejectcategoryQ .= " AND NOT ( cat1_uid=".$arr_tmp[0]." )";
								break;
							}
						}
					}

			// 브랜드 쿼리문 작성
				if( strlen($request[fld_brand_keyword]) >= 1 )
				{
					$arr_tmp = explode(',',$request[fld_brand_keyword]);
					for($x=0 ; $x < count($arr_tmp) ; $x++)
					{
						$Qry = "SELECT uid FROM goods_brand WHERE 
										fld_name LIKE '%$arr_tmp[$x]%' 
										OR fld_keyword LIKE '%$arr_tmp[$x]%' 
										OR fld_like_brand LIKE '%$arr_tmp[$x]%'";
						$Rlt = @mysql_query($Qry,$Con);
						$total_rows = @mysql_num_rows($Rlt);
						if($total_rows >= 1)
						{
							for($x2=0;$x2<count($total_rows);$x2++)
							{
								$row = @mysql_fetch_array($Rlt);
								$branduidQ .= ($x2>=1)?",":null;
								$branduidQ .= $row[uid];
							}
							
						}
					}
					if(strlen($branduidQ)>=1)
					{
						$branduidQ = " AND C.brand_uid IN ( ".$branduidQ;
						$branduidQ .= " )";
					}
				}
				
			// 공통 쿼리문 정의
				$selectQ = "
												A.uid AS proposal_uid
												, A.regmem_uid AS proposal_regmem_uid 
												, A.goods_uid AS proposal_goods_uid
												, A.fld_title AS proposal_title
												, A.fld_contents AS proposal_contents
												, A.fld_payment_type AS proposal_payment_type
												, A.fld_use AS proposal_use
												, A.fld_season AS proposal_season
												, A.fld_theme_color  AS proposal_theme_color
												, A.fld_age AS proposal_age
												, A.fld_buyer_upjong AS proposal_buyer_upjong
												, A.fld_character AS proposal_character
												, A.fld_sex AS proposal_sex
												, A.fld_print AS proposal_print
												, A.fld_sample AS proposal_sample
												, A.fld_delivery AS proposal_delivery
												, A.fld_regdate AS proposal_regdate 
												, UNIX_TIMESTAMP(A.fld_regdate) AS proposal_regtime 

												, min(B.fld_price) AS price_price
	
												, C.brand_uid AS goods_brand_uid
												, C.cat1_uid AS goods_cat1_uid
												, C.cat2_uid AS goods_cat2_uid
												, C.cat3_uid AS goods_cat3_uid
												, C.fld_name AS goods_name
												, C.fld_model AS goods_model
												, C.fld_price AS goods_price
												, C.fld_made_country AS goods_made_country
												, C.fld_image_s AS goods_image_s
												, C.fld_image_m AS goods_image_m
												, C.fld_spec AS goods_spec
												, C.fld_introduction AS goods_introduction
									";
					$fromQ = "
												proposal_default A, 
												proposal_price B, 
												goods_default C
									";
					$groupbyQ = "proposal_uid";
			
			// 공고 가격정보
				$Qry = "SELECT * FROM request_price WHERE request_uid=".$request[uid];
				$Qry .= ( $price_uid >= 1 )?" AND uid=".$price_uid:null;
				$Qry .= " ORDER BY uid";
				$Rlt = @mysql_query($Qry,$Con);
				while($price = @mysql_fetch_array($Rlt))
				{

					$whereQ = "
												A.regmem_uid != $request[regmem_uid] 
												AND A.fld_status=1
												AND A.fld_regdate <= '".$request[fld_end_date]." 23:59:59'
												AND A.uid = B.proposal_uid 
												AND A.goods_uid = C.uid

												AND B.fld_ea <= ".$price[fld_ea]."
												AND B.fld_price >= ".$price[fld_price_s]." AND B.fld_price <= ".$price[fld_price_e]."

												$openlevelQ
												$paymenttypeQ
												$useQ
												$seasonQ
												$themecolorQ
												$ageQ
												$buyerupjongQ
												$characterQ
												$sexQ
												$printQ
												$sampleQ
												$requestcategoryQ
												$rejectcategoryQ
												$branduidQ
												$sellerQ
										";

					# 조회 안한 제안서 갯수 파악하기
						$Qry2 = "SELECT $selectQ FROM $fromQ WHERE ".$whereQ;
						$Qry2 .= ( strlen($request[view_uid]) >= 1 )?" AND A.uid NOT IN (".$request[view_uid].") ":null;	// 조회한 제안서 제외
						$Qry2 .= " GROUP BY ".$groupbyQ;
						#echo $Qry2."<br/><br/>";
						$Rlt2 = @mysql_query($Qry2,$Con);
						$total_rows2 = @mysql_num_rows($Rlt2);
						$returnVar[notview] = $returnVar[notview] + $total_rows2;
						$returnVar[total] = $returnVar[total] + $total_rows2;

					// 리턴 쿼리 및 결과
						$returnVar[selectQ] = $selectQ;
						$returnVar[fromQ] = $fromQ;
						$returnVar[whereQ] = $whereQ;
						$returnVar[groupbyQ] = $groupbyQ;
						$returnVar[request_view_uid] = $request[view_uid];

					# 조회한 제안서 갯수 파악하기
						if( strlen($request[view_uid]) >= 1 )
						{
							$Qry2 = "SELECT $selectQ FROM $fromQ WHERE ".$whereQ;
							$Qry2 .= " AND A.uid IN (".$request[view_uid].") ";	// 조회한 제안서만
							$Qry2 .= " GROUP BY ".$groupbyQ;
							#echo $Qry2."<br/><br/>";
							$returnVar[notviewQ] = $Qry2;
							$Rlt2 = @mysql_query($Qry2,$Con);
							$total_rows2 = @mysql_num_rows($Rlt2);
							$returnVar[total] = $returnVar[total] + $total_rows2;
						}
				}
				
			return $returnVar;
			
		}		
?>