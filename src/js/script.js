 // gauge value 

    const frontendValue = document.querySelector('.frontendValue');
    const backendValue = document.querySelector('.backendValue');
    const uiValue = document.querySelector('.uiValue');
    const resValue = document.querySelector('.resValue');

    function setGaugeValue(gauge, value) {
        if (value < 0 || value > 1) {
            return;
        }

        gauge.querySelector('.gauge__fill').style.transform = `rotate(${
            value / 2
        }turn)`;
        gauge.querySelector('.gauge__value').textContent = `${Math.round(
            value * 100
        )}%`;
    }

    setGaugeValue(frontendValue, 0.42);
    setGaugeValue(backendValue, 0.37);
    setGaugeValue(uiValue, 0.73);
    setGaugeValue(resValue, 0.68);