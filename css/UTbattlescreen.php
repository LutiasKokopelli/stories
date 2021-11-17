<style>
#sginfo { box-sizing: border-box!important; position:relative; width:100%; font-family: "MNC"; padding-left:12px; font-size:10px; height:10px; line-height:10px; vertical-align: middle!important;}
.full-screen { box-sizing: border-box!important; position: relative; width: 320px; height:240px; margin: 7px auto; background-color: #000;}
.boxnorm, .boxboss { box-sizing: border-box!important; position: relative; width: 320px; height:118px!important; display:table; margin:auto; margin-bottom:5px;
                      background-size: auto 100%!important; background-repeat: no-repeat!important; background-position: center!important; text-align: center; }
.boxnorm{background:url(".htmlast/bg_battle_normal.png")} .boxboss{background:url(".htmlast/bg_battle_boss.png")}
div#screenbg { box-sizing: border-box!important; width: 320px; height:240px; background:url(".htmlast/starpattern.gif"); opacity:0.01; box-shadow: 0 0 3px 3px #000 inset; }
div#screenct { box-sizing: border-box!important; width: 320px; height:240px; position:absolute; top: 0; left:0;}
.sogabtn, .swgabtn { box-sizing:border-box!important; border-radius:2%; background-color:#000!important; margin:auto; font-family:"Mercy";
                     background-position: 6% 50%!important; background-repeat:no-repeat!important; background-size: auto 50%!important; text-align:right; width:75%; padding:2; }
.sogabtn           { border:1px solid #f68228; color:#f68228; background: url(".htmlast/saveo.png");}
.sogabtn:hover     { border:1px solid #ffff40; color:#ffff40; background: url(".htmlemj/soul.png"); }
.swgabtn           { border:1px solid #c3c3c3; color:#c3c3c3; background: url(".htmlast/savew.png"); }
.swgabtn:hover     { border:1px solid #ffffff; color:#ffffff; background: url(".htmlemj/soul.png"); }
.prevnext a        { color:#848484; } .prevnext a:hover { color:#f4d400; }
</style>

<?php
$bm_max  = 1; $chapter_bookmark = [["show",""],["hide",""]]; // List of all the links in the dialogue box...?
$bmpart1 = "Part 1"; $bmpart2 = "Part 2"; $bmpart3 = "Part 3"; $bmpart4 = "Part 4";   $bmpart5 = "Part 5";   $bmpart6 = "Part 6";
$bmpart7 = "Part 7"; $bmpart8 = "Part 8"; $bmpart9 = "Part 9"; $bmpart10 = "Part 10"; $bmpart11 = "Part 11"; $bmpart12 = "Part 12";
 ?>

<script type="text/javascript">

// https://stackoverflow.com/questions/7020873/show-hide-div-if-if-statement-is-true
// https://www.lambdatest.com/blog/css-font-size-adjust/
// https://fontstruct.com/fontstructions/show/1791090/undertale-crypt-of-tommorow
// https://www.php.net/manual/en/language.operators.arithmetic.php
// https://stackoverflow.com/questions/32788102/extracting-integer-from-a-for-loop-iteration-in-php-twig
// https://stackoverflow.com/questions/7293087/how-do-i-do-the-calculation-with-a-variable-in-php

function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}
</script>

<div class="full-screen"><div id="screenbg"></div><div id="screenct">
    <div class="<?= $battle_screen ?>" style="display:table-cell;vertical-align:middle;"><img src=".htmlbattlepfp/<?= $enemy_image ?>" style="max-height:100px; display:inline-block;"></div><div class="game-box" id="dogcheck" style="display:block;margin:0 auto;"><table class="contentnar"><tr><td><?= $chaptercheck ?></td></tr></table></div>
    <table id="sginfo"><tr>
        <td width="46px;" style="vertical-align: middle!important;">player</td>
        <td width="32px;" style="vertical-align: middle!important;">LV ??</td>
        <td width="36px;" style="vertical-align: middle!important;text-align:right;">hp</td>
        <td width="12px;"><div style="display:inline-block;background:#ffff00;width:12px; height:10px;"></div></td>
        <td style="vertical-align: middle!important;">no / hp</td>
    </tr></table>
    <table class="game-btn" style="font-size:10px; margin:0!important; padding:0!important;"><tr>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href=".html<?= $button1 ?>"><div class="sogabtn">
            <div style="-webkit-transform:scale(1.6,1.4);-moz-transform:scale(1.6,1.4);-o-transform:scale(1.6,1.4);transform:scale(1.6,1.4);padding-right:9px!important;">index</div>
        </div></a></td>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href=".html<?= $button2 ?>"><div class="swgabtn">
            <div style="-webkit-transform:scale(1.6,1.4);-moz-transform:scale(1.6,1.4);-o-transform:scale(1.6,1.4);transform:scale(1.6,1.4);padding-right:9px;">reset</div>
        </div></a></td>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href=".html<?= $button3 ?>"><div class="sogabtn">
            <div style="-webkit-transform:scale(1.4,1.4);-moz-transform:scale(1.4,1.4);-o-transform:scale(1.4,1.4);transform:scale(1.4,1.4);padding-right:6px;">reload</div>
        </div></a></td>
        <td width="25%;" style="margin:0!important; padding:0!important;"><a href=".html<?= $button4 ?>"><div class="sogabtn">
            <div style="-webkit-transform:scale(1.0,1.4);-moz-transform:scale(1.0,1.4);-o-transform:scale(1.0,1.4);transform:scale(1.0,1.4);padding-left: 6px!important;">continue</div>
        </div></a></td>
    </tr></table>
</div></div>
