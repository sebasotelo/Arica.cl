<? 
//initialize the session
if (!isset($_SESSION)) {
  session_start();
  $nivel= $_SESSION['MM_IdNivel'];
$usuario=$_SESSION['MM_IdUser'];
}

// ** Logout the current user. **
$logoutAction = $_SERVER['PHP_SELF']."?doLogout=true";
if ((isset($_SERVER['QUERY_STRING'])) && ($_SERVER['QUERY_STRING'] != "")){
  $logoutAction .="&". htmlentities($_SERVER['QUERY_STRING']);
  }

if ((isset($_GET['doLogout'])) &&($_GET['doLogout']=="true")){
  //to fully log out a visitor we need to clear the session varialbles
  
  if ($_SESSION['MM_arica']) { $_SESSION['MM_arica'] = NULL;   unset($_SESSION['MM_arica']);}
  if ($_SESSION['MM_UserGroup']) { $_SESSION['MM_UserGroup'] = NULL; unset($_SESSION['MM_UserGroup']);}
  if ($_SESSION['PrevUrl']) { $_SESSION['PrevUrl'] = NULL;unset($_SESSION['PrevUrl']); }
  
$logoutGoTo = "salir.php?nivel=$nivel";

  if ($logoutGoTo) {
    header('Location: '.$logoutGoTo);
	exit;
  }
}

?>