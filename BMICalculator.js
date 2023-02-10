const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    // ფუნქციაში შემოგვაქვს ცვლადები, რომლებიც იყენებს parseInt, ანუ ნებიემიერის ციფრად გადაქცევის ჩაშენებულ ფუნქციას. ეს ცვლადები გამოსახავს html ელემენტების მნიშვნელობებს, ანუ input ებს.
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;
    // შემოვიტანეთ ასევე სტატუსები, რომლებიც გამოჩნდებიან user ების მიერ არასწორად შეყვანილ ინფოზე. სტატუსებს მივანიჭეთ false.
    if(height === '' || isNaN(height) || (height <= 0)) {
        // შემოგვაქვს პირობა, isNaN(ეს არის ჩაშენებული ფუნქცია, რომელიც ადეტექტებს მნიშვნელობას და გვეუბნება რომ ეს არ არის ციფრი)
        document.getElementById('height_error').innerHTML = 'Please Provide a valid height';
        // ვამყარებთ წვდომას height_error თან, რომლის დახმარებითაც გამოგვაქვს ტექსტური შეტყობინება და იმისათვის, რომ ინტერპრეტატორმა მოახერხოს და მიხვდეს ბრძანებას საჭიროა innerHTML 
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
        //სხვა შემთხვევაში, ანუ თუ სწორად იქნება მონაცემი შეყვანილი მაშინ დაგვიბრუნდეს სიცარიელე
    }
    if(weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Please Provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(weight_status && height_status){
        // თუ ჩვენი სტატუსები სწორია
       const bmi = (weight / ((height ** 2)/10000)).toFixed(2);
      // tofixed ==> ეს არის რიცვის წერტილის შემდეგ რიცვხების რაოდენობა, ანუ ჩვენს შემთხვევაში წერტილის შემდეგ იქნება 2 ფიცრი.
       if(bmi < 18.6){
        result.innerHTML = 'Under weight : ' + bmi;
       }else if(bmi >= 18.6 && bmi < 24.9) {
        result.innerHTML = 'Normal : ' + bmi;
       }else{
        result.innerHTML = 'Over weight : ' + bmi;
      }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    } 
})