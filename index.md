@@ -0,0 +1,72 @@
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CAT CLOCK</title>
    <link rel="stylesheet" type="text/css" href="index.css">
    <link href="https://fonts.googleapis.com/css?family=Slackey&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
</head>
<body onload="updateClock();
             modeSwitch()">
    <header class="page"><b>MY CAT CLOCK</b></header>
    <div class="page" id="clockSection">
            <h3 id="canIHazTime">I can haz time??</h3>
        <p id="clock"></p>
    </div>

    <div class="page"  id="catImg">
        <p id="textInImg">"KONO DIO DA!"</p>
    </div>

    <div class="page" id="setTime">
        <table>
            <tr>
                <td>
                    <label for="">Set wake up time</label>
                        <select onchange="setWakeUpTime()" id="wake-up-time-selector">
                            <option value="6">6AM - 7AM</option>
                            <option value="7" selected>7AM - 8AM</option>
                            <option value="8">8AM - 9AM</option>
                        </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Set lunch time</label>
                        <select onchange="setLunchTime()" id="lunch-time-selector">
                            <option value="10">10AM - 11AM</option>
                            <option value="11">11AM - 12PM</option>
                            <option value="12" selected>12PM - 1PM</option>
                        </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">Set nap time</label>
                        <select onchange="setNapTime()" id="nap-time-selector">
                            <option value="13">1PM - 2PM</option>
                            <option value="14">2PM - 3PM</option>
                            <option value="15" selected>3PM - 4PM</option>
                            <option value="16">4PM - 5PM</option>
                        </select>
                </td>
            </tr>
        </table>  
    </div>

    <div style="display: block">
        <button type="button" class="button page hvr-grow" onclick="letsParty()">PARTY TIME!</button>
        <!-- To check images -->
        <!-- <button type="button" class="button page hvr-grow" onclick="modeSwitchBeta()">PARTY TIME!</button> -->
    </div>

    <footer class="page">
        <p>&copy;Labychu</p>
    </footer>
    
    <script src="index.js"></script>
</body>
</html>
