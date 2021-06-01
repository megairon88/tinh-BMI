function BMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    bmi = weight/height;

    document.getElementById("BMI").innerHTML="BMI của bạn là:" + "BMI";

    if(bmi<18.5){
        document.getElementById("BMI").innerHTML = "Gầy";
    }
    else if(18.5<=bmi && bmi<=22.9){
        document.getElementById("BMI").innerHTML = "Bình thường";
    }
    else if(23<=bmi && bmi<=24.9){
        document.getElementById("BMI").innerHTML = "Hơi béo";
    }
    else if(25<=bmi && bmi<=29.9){
        document.getElementById("BMI").innerHTML = "Béo phì cấp độ 1";
    }
    else if(30<=bmi && bmi<40 ){
        document.getElementById("BMI").innerHTML = "Béo phì cấp độ 2";
    }
    else{
        document.getElementById("BMI").innerHTML = "Béo phì cấp độ 3";
    }
}