<?

	if(!isset($_SERVER[PHP_AUTH_USER]))
	{
		Header("WWW-Authenticate: Basic realm=\" ������ ����\"");
		Header("HTTP/1.0 401 Unauthorized");
		echo("<script>alert('�����ڸ� ����� �� �ִ� ���� �Դϴ�!!');history.go(-1);</script>");
		exit;
	}
	else
	{
		if($_SERVER[PHP_AUTH_USER] != "b2b114" OR $_SERVER[PHP_AUTH_PW] != "ing")
		{
			Header("WWW-Authenticate: Basic realm=\"\"");
			Header("HTTP/1.0 401 Unauthorized");

			echo("<script>window.location.href='http://www.google.com';</script>");
			exit;
		}
	}
?>