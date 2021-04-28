var keySystems = {
    widevine: ['com.widevine.alpha'],
    playready: ['com.microsoft.playready', 'com.youtube.playready'],
    clearkey: ['webkit-org.w3.clearkey', 'org.w3.clearkey'],
    primetime: ['com.adobe.primetime', 'com.adobe.access'],
    fairplay: ['com.apple.fps', 'com.apple.fps.1_0', 'com.apple.fps.2_0', 'com.apple.fps.3_0']
};

var config = [{
    "initDataTypes": ["cenc"],
    "audioCapabilities": [{
         "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
    }],
    "videoCapabilities": [{
         "contentType": "video/mp4;codecs=\"avc1.42E01E\""
    }]
}];

var video = document.getElementById('video_player');

function supportsEncryptedMediaExtension() {

    var supportedSchemes = "";

    /**
     * default eme
     */
    if (typeof navigator.requestMediaKeySystemAccess === 'function') {
        console.log("found default EME supported");
    }

    /**
     * microsoft eme
     */
    if (typeof window.MSMediaKeys === 'function') {
        console.log('found MS-EME');
    }

    /**
     * webkit eme
     */
    if (typeof video.webkitGenerateKeyRequest === 'function') {
        console.log('found WebKit EME');
    }

    /**
     * fairplay support checking
     */
    keySystems.fairplay.forEach( keySystem => {
        if (navigator.requestMediaKeySystemAccess) {
            navigator.requestMediaKeySystemAccess(keySystem, config).then(function(keySystemAccess){
                console.log(keySystem + " is supported.");
                supportedSchemes = supportedSchemes + keySystem + " ";
                document.getElementById('log_area').innerText = "[" + supportedSchemes + "]";
                console.log(keySystemAccess);
            }).catch(function(){
                console.log(keySystem + " is NOT supported.");
            });
        }
    });
}

function setupEME() {
    video.session = [];
    video.addEventListener('encrypted', function(encryptedEvent){
        console.log(encryptedEvent);
    });
}

/**
 * mse load buffer
 * @param {*} mediaSource 
 * @param {*} type 
 * @param {*} mediaSegementQueue 
 * @returns 
 */
function MSELoadBuffer(mediaSource, type, baseUrl, mediaSegementQueue) {
    return new Promise(function(resolve, reject){
        var sourceBuffer;
        var segementIndex = 0;

        function loadNext() {
            if (mediaSource.readyState == 'close') {
                reject(new Error('MediaSource state is closed'));
                return;
            }

            /**
             * segement's length always decided by audio's segements. 
             */
            if (segementIndex >= mediaSegementQueue.length) {
                resolve();
                return;
            }

            var sigment = baseUrl + mediaSegementQueue[segementIndex++];

            fetchBuffer(sigment)
            .then(function(buffer){
                sourceBuffer.appendBuffer(new Uint8Array(buffer));
            }).catch(function(Error){
                console.log(Error);
            });
        }

        function fetchBuffer(url) {
            return new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest;
                xhr.open('get', url);
                xhr.responseType = 'arraybuffer';
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function () {
                    reject(new Error('request failed'));
                }
                xhr.send();
            });
        }

        sourceBuffer = mediaSource.addSourceBuffer(type);
        sourceBuffer.addEventListener("updateend", loadNext);
        loadNext();
    });
}

/**
 * playback start function
 */
function startPlaying(media) {
    var videoMimeType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    var audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

    setupEME();
    var mediaSource = new MediaSource();

    video.src = URL.createObjectURL(mediaSource);

    var sourceOpen = function(e) {
        mediaSource.removeEventListener('sourceopen', sourceOpen);
        Promise.all([MSELoadBuffer(mediaSource, videoMimeType, media.baseUrl, media.video_segements)])
            .then(function() {
                mediaSource.endOfStream();
            });
    }

    mediaSource.addEventListener('sourceopen', sourceOpen);
    video.addEventListener('canplay', function(){
        video.play();
    });
}

supportsEncryptedMediaExtension();
startPlaying(bbb);

