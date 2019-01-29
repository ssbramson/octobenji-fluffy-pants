var timerID = setInterval(function() {
  /* get date data */
  now = new Date();
  timezone = now.getTimezoneOffset();
  day = now.getDay();
  hour = now.getUTCHours();
  min = now.getUTCMinutes();
  sec = now.getUTCSeconds();
  ms = now.getUTCMilliseconds();

  /* set dates for citiies with respect to UTC time */ 

  displayTime(hour, min, sec, day, "", -5, "time-nyc", "day-nyc");
  displayTime(hour, min, sec, day, "", -8, "time-sf", "day-sf");
}, 1000);

/*
FUNCTION: returns the string day given the int from 0-6 that's given
*/
function displayTime(hour, min, sec, day, meridiem, offset, timeId, dayId) {

  /* adjusts hour and day depending on timezone offset */
  hour = hour + offset;
  if (hour < 0) {
    hour = 24 + hour;
    day--;
  } else if (hour >= 24) {
    hour = hour - 24;
    day++;
  }

  /* pads integers with extra 0 for formatting */
  if (hour < 10)
    hour = "0" + hour;
  if (min < 10)
    min = "0" + min;
  if (sec < 10)
    sec = "0" + sec;

  /* changes displayed time */
  document.getElementById(timeId).innerHTML = hour + ":" + min + ":" + sec + " " + meridiem;

  /* changes displayed day */
  document.getElementById(dayId).innerHTML = getDay(day);
}

/*
FUNCTION: returns the string day given the int from 0-6 that's given
*/
function getDay(day) {
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  if (day > 6) { // accounts for sundays when UTC is saturday
    day = day - 7;
  }
  return days[day];
}

new Vue({
  el: '#collaborate',

  template: `
    <main class="content-container">
        
      <section class="collaborate-content">

        <section class="collaborate-introduction-area">

          <h1 class="collaborate-introduction-title">Collaboration is the new competition</h1>

          <p class="collaborate-introduction-paragraph" role="text">Behind every great consumer product, there's an even greater team of individual collaborators coming together to blend their specialties as a collective unit.</p>

          <div class="collaborate-introduction-signature">- Spencer</div>

          <div class="collaborate-introduction-availability">Available to start collaborating in February 2019</div>
          
        </section>

        <section class="collaborate-locations-area">

          <h2 class="collaborate-locations-title">Currently located</h2>

          <div class="collaborate-location-area">

            <h3 class="collaborate-location-title">San Francisco</h3>

            <div class="collaborate-location-analog_clock-area">
            
              <div class="collaborate-location-analog_clock">
                <div class="collaborate-location-analog_clock_face">
                  <div class="clock_hand clock_hand-hour"></div>
                  <div class="clock_hand clock_hand-minute"></div>
                  <div class="clock_hand clock_hand-second"></div>
                </div>
              </div>

            </div>
            
            <div class="collaborate-location-time_day-area">
              <div id="time-sf"></div>
              <div id="day-sf"></div>
            </div>



              <h3 class="collaborate-location_location-header">New York City</h3>

              <div class="collaborate-location-analog_clock"></div>
              <div id="time-nyc"></div>
              <div id="day-nyc"></div>
          
            
            <!--
            <div class="collaborate-location_location">
              <h3 class="collaborate-location_location-header">New York City</h3>
              
              <ul class="collaborate-location_location-deatils">
                
                <li class="collaborate-location_location-detail_time">
                  <i class="fal fa-clock"></i> <span id="time-nyc"></span>
                </li>
                <li class="collaborate-location_location-detail_day">
                  <div id="day-nyc">SUNDAY</div>
                </li>

              </ul>
              
            </div>
            -->

            

          </div>

        </section>

      </section>

    </main>
  `
})