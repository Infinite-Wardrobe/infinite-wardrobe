import React, { useRef, useState, useEffect } from 'react';
import styles from "./styles.module.css";


const b64conv = () => {

}

const camTog = () => {

    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    let shouldFaceUser = true;
    let supports = navigator.mediaDevices.getSupportedConstraints();
    if( supports['facingMode'] === true ) {
        flipBtn.disabled = false;
    };

    let constraints = { audio: false, video: true }

    constraints.video = {
        width: 1920,
        height: 1080,
        facingMode: shouldFaceUser ? 'user' : 'environment'
    }

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error(err);
        })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9);
        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext("2d");
        b64img = b64conv(ctx);
        
        // ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto = true;
    }

    const closePhoto = () => {

    }

    useEffect(() => {
        getVideo();
        }, [ videoRef])


    let flipBtn = document.querySelector('#flip-btn');
 
    flipBtn.addEventListener('click', function(){
        if( stream == null ) return
        stream.getTracks().forEach(t => {
          t.stop();
        });
        shouldFaceUser = !shouldFaceUser;
    });

    return (
        <div className="">
            <div className={styles.camera}>
                <video ref={videoRef}></video>
                <button onclick={takePhoto}>Take a Pic</button>
                <button disabled id="flip-btn" class="btn btn-sm btn-warning">
                    Flip Camera
                </button>
            </div>
            
            <div className={styles.result + (hasPhoto ? "hasPhoto" :  "")}>
                <canvas ref={photoRef}>
                </canvas>
                <button onclick={closePhoto}>CLOSE</button>
            </div>
        </div>
    )
};

export default camTog;

