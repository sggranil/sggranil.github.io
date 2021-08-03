 // gauge value 

    const frontendValue = document.querySelector('.frontendValue');
    const backendValue = document.querySelector('.backendValue');
    const uiValue = document.querySelector('.uiValue');
    const resValue = document.querySelector('.resValue');

    function setGaugeValue(gauge, value) {
        if (value < 0 || value > 1) {
            return;
        }

        gauge.querySelector('.gauge__fill').style.transform = `rotate(${value / 2}turn)`;
        gauge.querySelector('.gauge__value').textContent = `${Math.round(value * 100)}%`;
    }

    window.addEventListener('scroll', () => {
        const showUp = document.querySelectorAll('.showUp');

        for (var i = 0; i < showUp.length; i++) {
            let height = window.innerHeight;
            let reveal = showUp[i].getBoundingClientRect().top;
            var showPoint = 150;

            if (reveal < height - showPoint) {
                showUp[i].classList.add('active');
            } else {
                showUp[i].classList.remove('active');
            }
            
            setGaugeValue(frontendValue, 0.51);
            setGaugeValue(backendValue, 0.43);
            setGaugeValue(uiValue, 0.64);
            setGaugeValue(resValue, 0.23); 
        }
    })


    // portfolio