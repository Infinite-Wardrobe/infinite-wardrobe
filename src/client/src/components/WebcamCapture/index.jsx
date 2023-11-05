import React from 'react'
import Webcam from "react-webcam"

function WebcamCapture() {
    const FACING_MODE_USER = "user";
    const FACING_MODE_ENVIRONMENT = "environment";
    const webcamRef = React.useRef(null)
    
    const videoConstraints = {
      facingMode: FACING_MODE_USER
    };
    
      const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
    
      const handleSwitch = React.useCallback(() => {
        setFacingMode(
          prevState =>
            prevState === FACING_MODE_USER
              ? FACING_MODE_ENVIRONMENT
              : FACING_MODE_USER
        );
      }, []);

      const handleCapture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
      );
    
      return (
        <>
          <button onClick={handleSwitch}>Switch camera</button>
          <button onClick={handleCapture}>Capture photo</button>
          <Webcam
          ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              ...videoConstraints,
              facingMode
            }}
          />
        </>
      );
    };


export default WebcamCapture