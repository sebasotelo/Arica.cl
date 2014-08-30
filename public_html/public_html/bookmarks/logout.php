<?

// include function files for this application
require_once("bookmark_fns.php");
session_start();
$old_user = $valid_user;  // store  to test if they *were* logged in
$result_unreg = session_unregister("valid_user");
$result_dest = session_destroy();

// start output html
do_html_header("Logging Out");

if (!empty($old_user))
{
  if ($result_unreg && $result_dest)
  {
    // if they were logged in and are now logged out
    echo "Logged out.<br>";
    do_html_url("login.php", "Login");
  }
  else
  {
   // they were logged in and could not be logged out
    echo "No hemos podido hacer Log Out.<br>";
  }
}
else
{
  // if they weren't logged in but came to this page somehow
  echo "No te encuentras logged in, as� que no hemos podido hacer logged out.<br>";
  do_html_url("login.php", "Login");
}

do_html_footer();

?>