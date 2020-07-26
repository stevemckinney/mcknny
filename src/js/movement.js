(function () {
  const safeToAnimate = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
if (!safeToAnimate) return;

      // Get the elements that we need
  const pointer = document.querySelector('.pointer')
  const screenLog = document.querySelector('.screen-log');

  let xPosition;
  let yPosition;

  let storedXPosition;
  let storedYPosition;

  // Set up our coordinate mapping with GSAP utils!
  let mapWidth;
  let mapHeight;
  function setMaps() {
    mapWidth = gsap.utils.mapRange(0, innerWidth, -50, 50);
    mapHeight = gsap.utils.mapRange(0, innerHeight, -50, 50);
  }
  window.addEventListener('resize', setMaps);
  setMaps();

  // Use .quickSetter for best performance since we're updating values a lot dynamically
  //apply it to the pointer x/y properties and append a "%" unit
  const xSet = gsap.quickSetter(pointer, 'x', '%');
  const ySet = gsap.quickSetter(pointer, 'y', '%');

  function movePointer() {
    // only recalculating if the value changes
    if (storedXPosition === xPosition && storedYPosition === yPosition) return;

    if(xPosition && yPosition){
      screenLog.innerText = `transform: translate(${Math.round(xPosition)}%, ${Math.round(yPosition)}%)`;
    }

    xSet(xPosition);
    ySet(yPosition);

    // update the stored positions with the current positions
    storedXPosition = xPosition;
    storedYPosition = yPosition;
  }
  // gsap's RAF, falls back to set timeout
gsap.ticker.add(movePointer);

  // updating the mouse coordinates
  function updateMouseCoords(event) {
    xPosition = mapWidth(event.clientX);
    yPosition = mapWidth(event.clientY);
  }
  window.addEventListener("mousemove", updateMouseCoords);
})();
