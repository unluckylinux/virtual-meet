
// Camera facing mode = flip mode
const FACING_MODE_ENVIRONMENT = "environment";
const FACING_MODE_USER = "user";
let gCurrentCameraFacingMode = FACING_MODE_ENVIRONMENT;

// Flip camera
const switchCamera = () => {

  if( gCurrentCameraFacingMode === FACING_MODE_ENVIRONMENT ){
    gCurrentCameraFacingMode = FACING_MODE_USER;
  }else{
    gCurrentCameraFacingMode = FACING_MODE_ENVIRONMENT;
  }
  startStreamingVideo();

}

// Flip Cmera
const filpCameraElem = document.getElementById( "flipCameraImage" );
filpCameraElem.addEventListener( "mouseover", async ev => {
  filpCameraElem.style.opacity = 0.7;
});
filpCameraElem.addEventListener( "mouseout", async ev => {
  filpCameraElem.style.opacity = 0.3;
});
filpCameraElem.addEventListener( "click", async ev => {
  switchCamera();
});



// Video element
const video = document.querySelector( "#video" );

// On Streaming
const startStreamingVideo = () => {
      
  if( navigator.mediaDevices.getUserMedia ){

    navigator.mediaDevices.getUserMedia( 
      { video: { facingMode: gCurrentCameraFacingMode } } 
    ).then( ( stream ) => {
      video.srcObject = stream;
    } );
    
  }

}
startStreamingVideo();

