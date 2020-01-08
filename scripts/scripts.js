document.addEventListener('DOMContentLoaded', () => {
//   const numImages = 2;
//   const mediaQuery = window.matchMedia('(orientation: portrait)');
//   let orientationVar = mediaQuery.matches ? 'vertical' : 'horizontal';
  
//   console.log(orientationVar);
//   const backgroundImageUsed = `url('./images/eli_${orientationVar}-${Math.ceil(Math.random() * numImages)}.jpg') no-repeat center center fixed`;
//   console.log(backgroundImageUsed);
  
//   document.body.style.background = backgroundImageUsed;

  const eliConsoleStyle = 'color: blue; font-size: 100px;';
  const consoleMessage1 = `
                        _______
                       / _____ \\
                      | /     \\ |
                      | \\_____/ |
                      |         |
                      |   _____ |
                      | -----   |
                      | ------- |
                      |         |
                      |         |
                      |         |
                      |         |
                      |  _____  |
                      | ------- |
                ______| ----    |______
               /      |  ------ |      \\
              |       |   ---   |       |
              |       |         |       |_____
              |       |         |       |     \\
              |       |         |       |      |
              |       |         |       |      |
              |       |         |       |      |
  ________    |      /           \\      |      |
 /        \\   |                          \\     |
/          \\  |                                 \\
\\__         \\ |                                  |
   \\         \\|                                  |
    \\         |                                  |
     \\         \\                                 |
      \\         \\                                |
       \\                                         |
        \\                                        |
         \\                                       |
          \\                                     /
           \\___                               /`

  const consoleMessage2 = 
  `
  
$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$
$$$'\`$$$$$$$$$$$$$'\`$$$$$
$$$$  $$$$$$$$$$$  $$$$$$
$$$$. \`$' \\' \\$\`  $$$$$$$
$$$$$. !\\  i  i .$$$$$$$$
$$$$$$   \`--\`--.$$$$$$$$$
$$$$$$L        \`$$$$$^^$$
$$$$$$$.   .'   ""~   $$$
$$$$$$$$.  ;      .e$$$$$
$$$$$$$$$   \`.$$$$$$$$$$$
$$$$$$$$    .$$$$$$$$$$$$
$$$$$$$     $$$$$$$by$TL$
-------------------------
       I LOVE YOU
-------------------------`
  console.log('%cHey, Eli!!', eliConsoleStyle);
  console.log(consoleMessage1);
  console.log(consoleMessage2);
  const updateTimer = () => {
    const eliBirthday = moment([2010, 3, 1]);
    const now = moment();
    const thisYear = Number(now.format('YYYY'));
    const yearToUse = now.month() < eliBirthday.month() ? thisYear : thisYear + 1;
    const eliNextBirthday = moment([yearToUse, 3, 1]);
    const millisecondsUntilNextBirthday = eliNextBirthday - now;
    const secondsUntilNextBirthday = Math.floor(millisecondsUntilNextBirthday / 1000) % 60;
    const secondsPluralizer = secondsUntilNextBirthday === 1 ? '' : 'S';
    const minutesUntilNextBirthday = Math.floor(millisecondsUntilNextBirthday / (1000 * 60)) % 60;
    const minutesPluralizer = minutesUntilNextBirthday === 1 ? '' : 'S';
    const hoursUntilNextBirthday = Math.floor(millisecondsUntilNextBirthday / (1000 * 60 * 60)) % 24;
    const hoursPluralizer = hoursUntilNextBirthday === 1 ? '' : 'S';
    const daysUntilNextBirthday = Math.floor(millisecondsUntilNextBirthday / (1000 * 60 * 60 * 24)) % 7;
    const daysPluralizer = daysUntilNextBirthday === 1 ? '' : 'S';
    const weeksUntilNextBirthday = Math.floor(millisecondsUntilNextBirthday / (1000 * 60 * 60 * 24 * 7));
    const weeksPluralizer = weeksUntilNextBirthday === 1 ? '' : 'S';
    document.getElementById('countdown-weeks').innerHTML = `<span>${weeksUntilNextBirthday} WEEK${weeksPluralizer}</span>`;
    document.getElementById('countdown-days').innerHTML = `<span>${daysUntilNextBirthday} DAY${daysPluralizer}</span>`;
    document.getElementById('countdown-hours').innerHTML = `<span>${hoursUntilNextBirthday} HOUR${hoursPluralizer}</span>`;
    document.getElementById('countdown-minutes').innerHTML = `<span>${minutesUntilNextBirthday} MINUTE${minutesPluralizer}</span>`;
    document.getElementById('countdown-seconds').innerHTML = `<span>${secondsUntilNextBirthday} SECOND${secondsPluralizer}</span>`;
  };
  updateTimer();
  setInterval(updateTimer, 1000);
});