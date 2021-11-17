<style>
    #desccontutpost  { border:solid 5px rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 1); }
    .ogabtnf, .ogabtna, .ogabtni, .ogabtnm
                  { box-sizing:border-box!important; width:90%; height:30%; border-radius:2%; background-color:#000!important; margin:auto; padding:4px; font-family:"Mercy";
                    background-position: 6% 50%!important; background-repeat:no-repeat!important; background-size: auto 50%!important; text-align:right; }
    .ogabtnf      { border:2px solid#f68228; color:#f68228; background: url("http://learnwhentoquit/ast/ico-fight.png");}
    .ogabtna      { border:2px solid#f68228; color:#f68228; background: url("http://learnwhentoquit/ast/ico-act.png");}
    .ogabtni      { border:2px solid#f68228; color:#f68228; background: url("http://learnwhentoquit/ast/ico-item.png");}
    .ogabtnm      { border:2px solid#f68228; color:#f68228; background: url("http://learnwhentoquit/ast/ico-mercy.png");}
    .ogabtnf:hover, .ogabtna:hover, .ogabtni:hover, .ogabtnm:hover
                  { border:2px solid#ffff40; color:#ffff40; background: url("http://learnwhentoquit/ast/li-soul.png"); }
</style>

<div id="gcont">

    <div id="desccont<?= $postype ?>">
        <h2 style="font-weight:normal; color:rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 1);">Learn When to Quit</h2>
        <hr style="background: linear-gradient(to right, rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 0), rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 0.75), rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 0))">
        <ul class="dlgmdt">
            <li><bso>Echo Flowers</bso> repeat what they hear, babbling back and forth to each other until their words become meaningless noise.</li>
            <li>What used to be the "<yso>truth</yso>"... soon becomes too distorted to appeal to anything you thought you knew.</li>
            <li><rso>Never trust a flower.</rso> That's one of the constants of this world.</li>
        </ul>
        <hr style="background: linear-gradient(to right, rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 0), rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 0.75), rgba(<?= $soulR ?>, <?= $soulG ?>, <?= $soulB ?>, 0))">
        <p>After trying everything he could to stop time loops from ruining his life and universe, <yso>Sans has finally figured out the truth.</yso> As a last resort, he finds out that he has no more choice... but to ask for help.</p>
        <p><yga>May 1st, 2016</yga>. Undertale has existed for half a year, and its fandom is raging at its full potential. But then, a Player disappears.</p>
    </div>

    <p></p>
    <table id="ginfo"><tr>
        <td>player</td><td>LV subjective</td><td width="20px;"></td><td><img src="http://learnwhentoquit/ast/saveUT.gif" style="margin-bottom:-4px; display:inline;"> no / hp</td>
    </tr></table>

    <table class="game-btn"><tr>
        <td width="25%;"><a href="http://learnwhentoquit/index.php"><div class="ogabtnf">
            <div style="-webkit-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-o-transform:scale(1.2,1.2);transform:scale(1.2,1.2);padding-right:2px!important;">HOME</div>
        </div></a></td>
        <td width="25%;"><a href="http://learnwhentoquit/notes.php"><div class="ogabtna">
            <div style="-webkit-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-o-transform:scale(1.2,1.2);transform:scale(1.2,1.2);padding-right:2px!important;">TIPS</div>
        </div></a></td>
        <td width="25%;"><div class="drpdwn">
            <div class="ogabtni">
            <div style="-webkit-transform:scale(1.1,1.2);-moz-transform:scale(1.1,1.2);-o-transform:scale(1.1,1.2);transform:scale(1.1,1.2);padding-right:2px!important;">MENU</div>
            </div>
            <div class="drpdwn-ctt"><ul class="dlgsdt">
                <a href="http://learnwhentoquit/000.php"><li>Chapter Zero</li></a>
                <a href="http://learnwhentoquit/UT/undertale.html"><li>Undertale Rawrs Archive</li></a>
                <a href="http://learnwhentoquit/UT/FloweysTimeMachine.html"><li>Flowey's Time Machine</li></a>
            </ul></div>
        </div></td>
        <td width="25%;"><a href="http://learnwhentoquit/beta.php"><div class="ogabtnm">
            <div style="-webkit-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-o-transform:scale(1.2,1.2);transform:scale(1.2,1.2);padding-right:2px!important;">BETA</div>
        </div></a></td>
    </tr></table>

</div>
