// Function to update the number displayed in front of the slider
function updateSliderValue(sliderId, displayId) {
    const slider = document.getElementById(sliderId);
    const display = document.getElementById(displayId);
    display.textContent = slider.value;

    slider.addEventListener('input', function() {
        display.textContent = slider.value;
    });
}

// Initialize the sliders and their corresponding values
updateSliderValue('qualityCamera', 'qualityCameraValue');
updateSliderValue('qualitySwitch', 'qualitySwitchValue');
updateSliderValue('performanceStorage', 'performanceStorageValue');
updateSliderValue('usability', 'usabilityValue');
updateSliderValue('price', 'priceValue');
updateSliderValue('overallSatisfaction', 'overallSatisfactionValue');
