<?

	// 세션START
		if(!$_SESSION) { session_start(); }

	// charset 정의
		header("Content-Type: text/html; charset=UTF-8");
		
	// Register_Global 에서 전역변수 설정부분.
		extract($_POST);extract($_GET);

	// 디렉토리설정
		DEFINE("WWWROOT","/home") ;
		DEFINE("LIBRARY",WWWROOT."/_LIBRARY") ;
		DEFINE('HOME_DIR','/home/_GNTGLOBAL/www.b2b114.co.kr_deving');
		DEFINE("WEBDATA",WWWROOT."/_GNTGLOBAL/_WEBDATA");
		
	// AUTH EXECUTE
		#@require_once HOME_DIR . "/include/auth.php";
	
	// 필수포함 파일설정
		@include_once HOME_DIR . "/include/function_b2b114.php";
		@include_once HOME_DIR . "/include/array_b2b114.php";
		@include_once LIBRARY . "/Modules/function_database_connect.php" ;
		
	// 데이타베이스 연결
		$Con = fnc_dbcon("b2b114") ;
		mysql_query("set names 'utf8'",$Con); 
		
	// 공용으로 사용할 상수정의
		DEFINE("CS_TELNO","0319027227");

	// 로그인 체크
		if(!$LoginNotCheck) fnc_login_check();
		if($_SESSION[ssUID] >= 1)
		{
			$Qry2 = "SELECT *, UNIX_TIMESTAMP(fld_confirm_celno) AS time_confirm_celno, UNIX_TIMESTAMP(fld_confirm_company) AS time_confirm_company FROM member_default WHERE uid=".$_SESSION[ssUID];
			$Rlt2 = @mysql_query($Qry2,$Con);
			$ArrThisMemberDefaultInfo = @mysql_fetch_array($Rlt2);
		}

?>