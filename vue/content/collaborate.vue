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
  displayTime(hour, min, sec, day, "", -8, "time-la", "day-la");
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
    <!-- <main class="collaborate-container"> -->
    <main class="content-container">
        
      <section class="collaborate-content">

        <section class="collaborate-introduction-content">
          <h2 class="collaborate-introduction_title">Collaboration is the new competition</h2>

          <p class="collaborate-introduction_paragraph" role="text">Lorem ipsum mollitia laboriosam aper iampis icing elit. Dolor sit amet consect etur adipisicing elit. Possimus quis delectus sap iente. Nesciunt mollitia laboriosam aperiampisicing elit. Possimus quis delectus sapi ente. Nesciunt mollitia laboriosam aperiam olor sit amet volu ptate dicta cumque. volu ptate dicta cumque.</p>

          <div class="collaborate-introduction_signature">- Spencer</div>

          <div class="collaborate-introduction_availability">available for work February 2019</div>
          
        </section>

        <section class="collaborate-location-content">

          <!-- <h3 class="collaborate-location_header">Currently located</h3> -->

          <ul class="collaborate-location_locations">

            <li class="collaborate-location_location">
              <h4 class="collaborate-location_location-header">Los Angeles</h4>
              <ul class="collaborate-location_location-deatils">
                <li class="collaborate-location_location-detail_time">
                  <i class="fal fa-clock"></i> <span id="time-la"></span>
                </li>
                <li class="collaborate-location_location-detail_day">
                  <div id="day-la">SUNDAY</div>
                </li>
              
                <!--
                <li class="collaborate-location_location-detail_email">
                    <a href="mailto:LA@ssbramson.com" aria-label="This will send an email to LA@ssbramson.com">email</a>
                </li>
                -->
              </ul>
              
            </li>

            <li class="collaborate-location_location">
              <h4 class="collaborate-location_location-header">New York City</h4>
              <ul class="collaborate-location_location-deatils">
                
                <li class="collaborate-location_location-detail_time">
                  <i class="fal fa-clock"></i> <span id="time-nyc"></span>
                </li>
                <li class="collaborate-location_location-detail_day">
                  <div id="day-nyc">SUNDAY</div>
                </li>

              </ul>
              
              <h4 class="collaborate-location_location-header"><a href="mailto:NYC@ssbramson.com" aria-label="This will send an email to NYC@ssbramson.com">New York City</a></h4>
              
            </li>

            

          </ul>

        </section>

      </section>

    </main>
  `
})