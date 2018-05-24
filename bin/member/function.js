
// 회원가입 > 아이디 체크
	function fnc_join_idchk()
	{
		if( $('ID_join_id').value.length < 3 )
		{
			$('ID_join_id_msg').innerHTML = "영문+숫자, 3~20자 이내로 아이디를 입력 해주십시오.";
			$('ID_join_id').focus();
		}
		else
		{
			new Ajax.Request
			(
				'/bin/member/_check_already.html', {
					method: 'post',
					parameters: {
						'fldfld':'fld_id',
						'valval':$('ID_join_id').value
					}, 
					onComplete: function(httpObj) { 
							if( httpObj.responseText == "TRUE" )
							{
								$('ID_join_id_msg').innerHTML = "사용 가능한 아이디 입니다." ;
								$('ID_join_id_chk').value=1;
							}
							else
							{
								$('ID_join_id_msg').innerHTML = "<font color='#FF0000'>이미 사용중인 아이디입니다. 다른 아이디를 입력 해주십시오.</font>" ; 
								$('ID_join_id').focus();
								$('ID_join_id_chk').value=0;
							}
						}
				}
			);
		}
	}

// 회원가입 > 이메일 체크
	function fnc_join_emailchk()
	{
		if( $('ID_join_email').value.length < 1 )
		{
			$('ID_join_email_msg').innerHTML = "이메일주소를 입력해주십시오.";
			$('ID_join_email').focus();
		}
		else
		{
			if( fnc_email_check($('ID_join_email').value) == false)
			{
				$('ID_join_email_msg').innerHTML = "이메일주소를 정확하게 입력해주십시오.";
				$('ID_join_email').focus();
			}
			else
			{
				new Ajax.Request
				(
					'/bin/member/_check_already.html', {
						method: 'post',
						parameters: {
							'fldfld':'fld_email_address',
							'valval':$('ID_join_email').value
						}, 
						onComplete: function(httpObj) { 
								if( httpObj.responseText == "TRUE" )
								{
									$('ID_join_email_msg').innerHTML = "" ;
									$('ID_join_email_chk').value=1;
								}
								else
								{
									$('ID_join_email_msg').innerHTML = "<font color='#FF0000'>이미 가입된 이메일주소입니다. 다른 이메일을 입력 해주십시오.</font>" ; 
									$('ID_join_email').focus();
									$('ID_join_email_chk').value=0;
								}
							}
					}
				);
			}
		}
	}

	function fnc_celno_confirm1()
	{
		if( $('ID_join_celno').value.length < 3 )
		{
			$('ID_join_celno_msg').innerHTML = "휴대폰번호를 입력해주십시오.";
			$('ID_join_celno').focus();
		}
		else
		{
			new Ajax.Request
			(
				'/bin/member/_celno_confirm.html', {
					method: 'get',
					parameters: {
						'celno':$('ID_join_celno').value
					}, 
					onComplete: function(httpObj) { 
						$('IDB_celno_confirm').style.display = "block";
						$('ID_join_celno_msg').innerHTML = "문자메시지로 도착된 인증번호를 입력해주십시오";
						$('ID_celno_confirm').focus();
					}
				}
			);
		}
	}

	function fnc_celno_confirm2(popup)
	{
		if(popup == "") { popup = 0; } else { popup = 1; }
		
		if( $('ID_celno_confirm').value.length < 3 )
		{
			$('ID_join_celno_msg').innerHTML = "인증번호를 입력해주십시오.";
			$('ID_celno_confirm').focus();
		}
		else
		{
			new Ajax.Request
			(
				'/bin/member/_celno_confirm.html', {
					method: 'get',
					parameters: {
						'confirm_no':$('ID_celno_confirm').value
					}, 
					onComplete: function(httpObj) { 
						if( httpObj.responseText == "TRUE" )
						{
							$('ID_join_celno_msg').innerHTML = "휴대폰 인증완료" ;
							$('ID_join_celno_confirm').value = "Y";
							$('IDB_celno_confirm').style.display = "none";
							$('IDBT_join_celno').style.display = "none";
							if(popup == 1) { $('IDBT_celno_confirm_complete').style.display = "block"; }
						}
						else
						{
							$('ID_join_celno_msg').innerHTML = "인증번호를 정확히 입력해주십시오" ; 
							$('ID_celno_confirm').focus();
							$('ID_join_celno_confirm').value=null;
						}
					}
				}
			);
		}
	}

