<hmtl><head><title>Learn When to Quit</title><link rel="stylesheet"type="text/css"href="http://learnwhentoquit/css/index.css"media="screen"></head>
<body><link rel="shortcut icon"href="http://learnwhentoquit/emj/echo.gif">
<?php
$battle_screen = "boxboss"; // "boxnorm" or "boxboss"
$enemy_image = "http://learnwhentoquit/emj/papyrus_hmm.gif"; $chapter_bookmark = [["show",""],["hide",""]]; // List of all the links in the dialogue box...?
$button1 = "http://learnwhentoquit/index.php"; $button2 = "http://learnwhentoquit/001.php"; $button3 = "http://learnwhentoquit/000.php"; $button4 = "http://learnwhentoquit/000.php";
$bm_max  = 1; $bmpart1 = "Part 1"; $bmpart2 = "Part 2"; $bmpart3 = "Part 3"; $bmpart4 = "Part 4";   $bmpart5 = "Part 5";   $bmpart6 = "Part 6";
              $bmpart7 = "Part 7"; $bmpart8 = "Part 8"; $bmpart9 = "Part 9"; $bmpart10 = "Part 10"; $bmpart11 = "Part 11"; $bmpart12 = "Part 12";
$soulR = 246; $soulG = 130; $soulB = 40;
$chaptercheck = ''
?>
<?php include('sidebar.php'); ?>

<div id="post_container">
<!-- UNDERTALE DIALOGUE BOXES -->
<div class="dispost" id="dialoguetests">
    <div class="game-box"><table class="contentchr">
        <tr><th><img src="http://learnwhentoquit/emj/papyrus_cool.png"></th><td><ul class="dlgpaps"><li>SANS NEVER SOLVES<br>IT EITHER.</li></ul></td></tr>
    </table></div>
    <div class="game-box"><table class="contentnar"><tr><td><ul class="dlgsdt"><li>GRILLBY - ATK 28 DEF 17</li><li>Clearly needs a <br>reality check.</li></ul></td></tr></table></div>
    <div class="game-box"><table class="contentnar"><tr><td><ul class="dlgsdt"><li>GRILLBY - ATK 28 DEF 17</li><li>Clearly needs help.</li></ul></td></tr></table></div>
    <div class="game-box"><table class="contentchr">
        <tr><th><img src="http://learnwhentoquit/emj/sans_wink.png"></th><td><ul class="dlgsans"><li>sorry, thirty is<br>the limit on<br>head-dogs.</li></ul></td></tr>
    </table></div>
    <div class="game-box"><table class="contentchr">
        <tr><th><img src="http://learnwhentoquit/emj/alphys_ooo.png"></th><td><ul class="dlgmdt"><li>Line 1<br>Line 2</li><li>Line 3</li></ul></td></tr>
    </table></div>
</div>

<!-- <div class="game-box"><div class="dlgbox aspect-ratio"><div class="content"><table><tr>
	<td><ul class="dlgsdt"><li>GRILLBY - ATK 28 DEF 17</li><li>Clearly needs a <br>reality check.</li></ul></td>
</tr></table></div></div></div>

<div class="game-box"><div class="dlgbox aspect-ratio"><div class="content"><table><tr>
	<th style="width:64px;"><img src="emj/alphys_awkward.png" style="margin-bottom:25%;"></th>
	<td><ul class="dlgmdt"><li>Line 1<br>Line 2</li><li>Line 3</li></ul>
</tr></table></div></div></div>

<div class="game-box"><div class="dlgbox aspect-ratio"><div class="content"><table><tr>
	<th style="width:64px;"><img src="emj/sans_wink.png" style="margin-bottom:25%;"></th>
	<td><ul class="dlgsans"><li>sorry, thirty is<br>the limit on<br>head-dogs.</li></ul></td>
</tr></table></div></div></div>

<div class="game-box"><div class="dlgbox aspect-ratio"><div class="content"><table><tr>
	<th style="width:64px;"><img src="emj/papyrus_cool.png" style="margin-bottom:25%;"></th>
	<td><ul class="dlgpaps"><li>SANS NEVER SOLVES<br>IT EITHER.</li></ul>
</tr></table></div></div></div>

<div class="game-box"><div class="statsbox aspect-ratio"><div class="content"><sgame><table>
	<tr><td><p>"Kris"</p><p></p></td><td></td></tr>
	<tr><td><p>LV 1</p></td><td></td></tr>
	<tr><td><p>HP 20/20</p><p></p></td><td></td></tr>
	<tr><td><p>AT: 10(1)</p></td><td><p>EXP:0</p></td></tr>
	<tr><td><p>DF: 10(0)</p><p></p></td><td><p>NEXT:10</p></td></tr>
	<tr><td><p>WEAPON: Pencil</p></td><td></td></tr>
	<tr><td><p>ARMOR: Bandage</p><p></p></td><td></td></tr>
	<tr><td><p>MONEY: 2</p></td><td></td></tr>
</table></sgame></div></div></div> -->

<!-- <div class="full-screen" style="background:url(ast/starpattern.gif)">
	<div class="game-box"><table class="contentchr"><tr>
		<th><img src="emj/papyrus_cool.png"></th>
		<td><ul class="dlgpaps"><li>SANS NEVER SOLVES<br>IT EITHER.</li></ul></td>
	</tr></table></div>
</div> -->

</div>

<style type="text/css">
/* OTHER UNDERTALE MENUS:

SAVE BOX:	424 x 174
	Chara	LV1	0:00
	Ruins - Entrance

	* Save		Return
--------------------------------

MENU BOXES:
--------------------------------
	Kris
	LV	1
	HP	20/20
	$	2	<-- 568 x 440
--------------------------------
	ITEM
	STAT
	CELL		<-- 568 x 592
--------------------------------
	[general big menu window, ex phone menu]
			<-- 1384 x 1080
--------------------------------
FULL STATS MENU (Undertale)
	"Kris"

	LV 1
	HP 20/20

	AT 10(1)	EXP:0
	DF 10(0)	NEXT:10

	WEAPON: Pencil
	ARMOR: Bandage

	MONEY: 2	<-- 346 x 418 */

/*
.game-box              { box-sizing: border-box; position: relative; width: 300px; margin: 7px auto; border:3px solid #fff; }
.game-box-screen       { box-sizing: border-box; position: relative; width:     %; margin: 7px auto; border:3px solid #fff; }
.dlgbox.aspect-ratio   { box-sizing: border-box; padding-bottom: 24%; }
.statsbox.aspect-ratio { box-sizing: border-box; padding-bottom: 120%; }
.content               { position: absolute; top: 0;  bottom: 0;  left: 0;  right: 0; background: #000; padding:5px; }
*/
</style>

<!-- <style>
#sginfo { box-sizing: border-box!important; position:relative; width:100%; font-family: "MNC"; padding-left:12px; font-size:10px; height:10px; line-height:10px; vertical-align: middle!important;}
.full-screen { box-sizing: border-box!important; position: relative; width: 320px; height:240px; margin: 7px auto; }
.boxnorm, .boxboss { box-sizing: border-box!important; position: relative; width: 320px; height:118px!important; display:table; margin:auto; margin-bottom:5px;
                      background-size: auto 100%!important; background-repeat: no-repeat!important; background-position: center!important;}
.boxnorm{background:url(http://learnwhentoquit/ast/bg_battle_normal.png)} .boxboss{background:url(http://learnwhentoquit/ast/bg_battle_boss.png)}
div#screenbg { box-sizing: border-box!important; width: 320px; height:240px; background:url("http://learnwhentoquit/ast/starpattern.gif"); opacity:0.02; box-shadow: 0 0 3px 3px #000 inset; }
div#screenct { box-sizing: border-box!important; width: 320px; height:240px; position:absolute; top: 0; left:0;}
</style>

<div id="indexlist"><?php include('css/indtro.php'); ?>

<div class="full-screen"><div id="screenbg"></div><div id="screenct">

    <div class="boxboss"><img src=""></div>

    <div class="game-box" style="margin:0 auto;"><table class="contentnar"><tr>
        <td><ul class="dlgsdt"><a href="#chapter1"><li>Part 1</li></a><a href="#chapter3"><li>Part 3</li></a></ul></td>
        <td><ul class="dlgsdt"><a href="#chapter2"><li>Part 2</li></a></ul></td>
    </tr></table></div>
    <table id="sginfo"><tr>
        <td width="46px;" style="vertical-align: middle!important;">player</td>
        <td width="32px;" style="vertical-align: middle!important;">LV ??</td>
        <td width="36px;" style="vertical-align: middle!important;text-align:right;">hp</td>
        <td width="12px;"><div style="display:inline-block;background:#ffff00;width:12px; height:10px;"></div></td>
        <td style="vertical-align: middle!important;">no / hp</td>
    </tr></table>

    <table class="game-btn" style="font-size:10px; margin:0!important; padding:0!important;"><tr>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href="index.php"><div class="ogabtn" style="width:75%;padding:2;border:1px solid #f68228;">
            <div style="-webkit-transform:scale(1.6,1.4);-moz-transform:scale(1.6,1.4);-o-transform:scale(1.6,1.4);transform:scale(1.6,1.4);padding-right:9px!important;">index</div>
        </div></a></td>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href="001.php"><div class="wgabtn" style="width:75%;padding:2;border:1px solid #c3c3c3;">
            <div style="-webkit-transform:scale(1.6,1.4);-moz-transform:scale(1.6,1.4);-o-transform:scale(1.6,1.4);transform:scale(1.6,1.4);padding-right:9px;">reset</div>
        </div></a></td>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href="050.php"><div class="ogabtn" style="width:75%;padding:2;border:1px solid #f68228;">
            <div style="-webkit-transform:scale(1.4,1.4);-moz-transform:scale(1.4,1.4);-o-transform:scale(1.4,1.4);transform:scale(1.4,1.4);padding-right:6px;">reload</div>
        </div></a></td>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href="052.php"><div class="ogabtn" style="width:75%;padding:2;border:1px solid #f68228;">
            <div style="-webkit-transform:scale(1.0,1.4);-moz-transform:scale(1.0,1.4);-o-transform:scale(1.0,1.4);transform:scale(1.0,1.4);padding-left: 6px!important;">continue</div>
        </div></a></td>
    </tr></table>
</div></div>
</div> -->
</body>
