Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snap()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version); 

classifier = ml5.imageClassifier('​​https://teachablemachine.withgoogle.com/models/m4sAbLEUR/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata1 = "The prediction is "+prediction1;
    var utterThis = new SpeechSynthesisisUtterance(speakdata1);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function modelLoaded(){
    console.log('Model Loaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
if (error) {
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_name").innerHTML = results[0].label;

    prediction1 = results[0].label;
    speak();
    if(prediction1 == "victory"){
        document.getElementById("result_emoji").innerHTML = "&#9996;";
    }
    if(prediction1 == "best"){
        document.getElementById("result_emoji").innerHTML = ">&#128077;";
    }
    if(prediction1 == "amazing"){
        document.getElementById("result_emoji").innerHTML = "&#128076;";

    }
}
}
