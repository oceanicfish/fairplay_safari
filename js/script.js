// var mediaElement = $('#video_player');
// playerElement.src = "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8";
// playerElement.autoplay = true;

// var playerOption = new PlayerOption();
// playerOption.masterManifestUrl = 'test.ts';
// var player = new vplayer("video_player", playerOption);

// player.load();

var baseUrl = "https://test-streams.mux.dev/x36xhzz/";
var mediabbb = {
    segements: [
        "url_526/193039199_mp4_h264_aac_ld_7.ts",
        "url_527/193039199_mp4_h264_aac_ld_7.ts",
        "url_528/193039199_mp4_h264_aac_ld_7.ts",
        "url_529/193039199_mp4_h264_aac_ld_7.ts",
        "url_530/193039199_mp4_h264_aac_ld_7.ts",
        "url_531/193039199_mp4_h264_aac_ld_7.ts",
        "url_532/193039199_mp4_h264_aac_ld_7.ts",
        "url_533/193039199_mp4_h264_aac_ld_7.ts",
        "url_534/193039199_mp4_h264_aac_ld_7.ts",
        "url_535/193039199_mp4_h264_aac_ld_7.ts",
        "url_536/193039199_mp4_h264_aac_ld_7.ts",
        "url_537/193039199_mp4_h264_aac_ld_7.ts",
        "url_538/193039199_mp4_h264_aac_ld_7.ts",
        "url_539/193039199_mp4_h264_aac_ld_7.ts",
        "url_540/193039199_mp4_h264_aac_ld_7.ts",
        "url_541/193039199_mp4_h264_aac_ld_7.ts",
        "url_542/193039199_mp4_h264_aac_ld_7.ts",
        "url_543/193039199_mp4_h264_aac_ld_7.ts",
        "url_544/193039199_mp4_h264_aac_ld_7.ts",
        "url_545/193039199_mp4_h264_aac_ld_7.ts",
        "url_546/193039199_mp4_h264_aac_ld_7.ts",
        "url_547/193039199_mp4_h264_aac_ld_7.ts",
        "url_548/193039199_mp4_h264_aac_ld_7.ts",
        "url_549/193039199_mp4_h264_aac_ld_7.ts",
        "url_550/193039199_mp4_h264_aac_ld_7.ts",
        "url_551/193039199_mp4_h264_aac_ld_7.ts",
        "url_552/193039199_mp4_h264_aac_ld_7.ts",
        "url_553/193039199_mp4_h264_aac_ld_7.ts",
        "url_554/193039199_mp4_h264_aac_ld_7.ts",
        "url_555/193039199_mp4_h264_aac_ld_7.ts",
        "url_556/193039199_mp4_h264_aac_ld_7.ts",
        "url_557/193039199_mp4_h264_aac_ld_7.ts",
        "url_558/193039199_mp4_h264_aac_ld_7.ts",
        "url_559/193039199_mp4_h264_aac_ld_7.ts",
        "url_560/193039199_mp4_h264_aac_ld_7.ts",
        "url_561/193039199_mp4_h264_aac_ld_7.ts",
        "url_562/193039199_mp4_h264_aac_ld_7.ts",
        "url_563/193039199_mp4_h264_aac_ld_7.ts",
        "url_564/193039199_mp4_h264_aac_ld_7.ts",
        "url_565/193039199_mp4_h264_aac_ld_7.ts",
        "url_566/193039199_mp4_h264_aac_ld_7.ts",
        "url_567/193039199_mp4_h264_aac_ld_7.ts",
        "url_568/193039199_mp4_h264_aac_ld_7.ts",
        "url_569/193039199_mp4_h264_aac_ld_7.ts",
        "url_570/193039199_mp4_h264_aac_ld_7.ts",
        "url_571/193039199_mp4_h264_aac_ld_7.ts",
        "url_572/193039199_mp4_h264_aac_ld_7.ts",
        "url_573/193039199_mp4_h264_aac_ld_7.ts",
        "url_574/193039199_mp4_h264_aac_ld_7.ts",
        "url_575/193039199_mp4_h264_aac_ld_7.ts",
        "url_576/193039199_mp4_h264_aac_ld_7.ts",
        "url_577/193039199_mp4_h264_aac_ld_7.ts",
        "url_578/193039199_mp4_h264_aac_ld_7.ts",
        "url_579/193039199_mp4_h264_aac_ld_7.ts",
        "url_580/193039199_mp4_h264_aac_ld_7.ts",
        "url_581/193039199_mp4_h264_aac_ld_7.ts",
        "url_582/193039199_mp4_h264_aac_ld_7.ts",
        "url_583/193039199_mp4_h264_aac_ld_7.ts",
        "url_584/193039199_mp4_h264_aac_ld_7.ts",
        "url_585/193039199_mp4_h264_aac_ld_7.ts",
        "url_586/193039199_mp4_h264_aac_ld_7.ts",
        "url_587/193039199_mp4_h264_aac_ld_7.ts",
        "url_588/193039199_mp4_h264_aac_ld_7.ts",
        "url_589/193039199_mp4_h264_aac_ld_7.ts"
    ]
};

var videoMimeType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
var audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

var video = document.getElementById('video_player');
var mediaSource = new MediaSource();

function sourceOpen(e) {
    console.log(e.target);
    var mediaSource = e.target;
    if (mediaSource.readyState == "closed") {
        return;
    }
    var sourceBuffer = mediaSource.addSourceBuffer(videoMimeType);

    var mediaUrl = "https://bitdash-a.akamaihd.net/content/sintel/hls/video/250kbit/seq-0.ts";
    fetchBuffer(mediaUrl, function(buffer) {
        sourceBuffer.appendBuffer(new Uint8Array(buffer));
    });
    sourceBuffer.addEventListener('updateend', updateEnd);
}

function updateEnd(e) {
    var sourceBuffer = e.target;
    console.log(sourceBuffer);
    mediaSource.endOfStream();
    video.play();
}

function fetchBuffer(url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open('get', url);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
        callback(xhr.response);
    };
    xhr.send();
}

video.src = URL.createObjectURL(mediaSource);
mediaSource.addEventListener('sourceopen', sourceOpen);