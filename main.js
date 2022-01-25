Webcam.set({

    height:507,
    width:516,
    image_format:'jpg',
    jpg_quality:100
    
    });
    
    camera= document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take_snapshot(){
    
    Webcam.snap(function(data_uri){
    
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    
    });
    
    }
    
    console.log('ml5 version', ml5.version);
    
    classifier = mlg.imgClassifier('https://teachablemachine.withgoogle.com/models/8xjk91i2Y/model.json',modelLoaded);