<!--

	function fnc_already_check(form_fname,form_flabel,db_tname,db_fname)
	{
		
		var chk_chk = form_fname + "_chk";
		var chk_msg = form_fname + "_msg";
		
		if( $(form_fname).value.length <= 0 )
		{
			$(chk_msg).innerHTML = form_flabel + "는(은) 필수 입력항목입니다. 입력 해주십시오.";
			$(form_fname).focus();
		}
		else
		{
			new Ajax.Request
			(
				'/bin/_common/already_check.html', {
					method: 'post',
					parameters: {
						'tabletable':db_tname,
						'fldfld':db_fname,
						'valval':$(form_fname).value
					}, 
					onComplete: function(httpObj) { 
							if( httpObj.responseText == "TRUE" )
							{
								$(chk_msg).innerHTML = "사용 가능한 " + form_flabel + " 입니다." ;
								$(chk_chk).value=1;
							}
							else
							{
								$(form_flabel).innerHTML = "<font color='#FF0000'>이미 사용중인 " + form_flabel + " 입니다. 다른 " + form_flabel + "을(를) 입력 해주십시오.</font>" ; 
								$(form_fname).focus();
								$(chk_chk).value=0;
							}
						}
				}
			);
		}
	}

-->