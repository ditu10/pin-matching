function getPin() {
    let pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length != 4) {
        return getPin();
    }
    return pin;
}

document.getElementById('btn-generate').addEventListener('click', function () {
    let inputField = document.getElementById('input-generate');
    // inputField.removeAttribute('disabled');
    const pin = getPin();
    document.getElementById('matching-left').innerText = 3;
    document.getElementById('display-field').value = '';
    inputField.style.backgroundColor = '#3D4153'
    inputField.style.color = 'white';
    inputField.style.fontSize = '24px';
    inputField.style.letterSpacing = '1px';
    inputField.value = pin;
    document.getElementById('submit-btn').removeAttribute('disabled');

})



let button = document.querySelectorAll('.button')
// console.log(button)
for (btn of button) {
    btn.addEventListener('click', function (e) {
       
        let displayValue = document.getElementById('display-field').value;
        let newchar = e.target.innerText;
        
        switch (newchar) {
            case '<':
                displayValue = displayValue.substr(0, displayValue.length - 1);
                document.getElementById('display-field').value = displayValue;
                break
            case 'C':
                displayValue = '';
                document.getElementById('display-field').value = displayValue;
                break
            default:
                displayValue += newchar;
                document.getElementById('display-field').value = displayValue;
                break
        }

        document.getElementById('display-field').style.fontSize = '24px';
        document.getElementById('display-field').style.letterSpacing = '1px';

        
    })
    
}

document.getElementById('submit-btn').addEventListener('click', function () {
    // console.log('submitted')
    let pin = document.getElementById('input-generate').value;
    let input = document.getElementById('display-field').value;
    if (pin == input) {
        console.log('pin matched!!');
        alert('✅ Whooo!! Pin Matched... The Secret door is opening for you')
    }
    else {
        let count = document.getElementById('matching-left').innerText;
        count = parseInt(count);

        count--
        document.getElementById('matching-left').innerText = count;
        alert("❌ Sorry, Pin Didn't Match, Please try again")
        if (count == 0) {
            document.getElementById('submit-btn').setAttribute('disabled', true);
        }
    }
})

