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

// Function to handle form submission
document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    const formData = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        company: document.getElementById('company').value,
        serviceType: document.getElementById('serviceType').value,
        qualityCamera: document.getElementById('qualityCamera').value,
        qualitySwitch: document.getElementById('qualitySwitch').value,
        performanceStorage: document.getElementById('performanceStorage').value,
        usability: document.getElementById('usability').value,
        price: document.getElementById('price').value,
        installationSatisfaction: document.querySelector('input[name="installationSatisfaction"]:checked')?.value,
        improvementSuggestions: document.getElementById('improvementSuggestions').value,
        futureCollaboration: document.querySelector('input[name="futureCollaboration"]:checked')?.value,
        additionalServices: document.getElementById('additionalServices').value,
        overallSatisfaction: document.getElementById('overallSatisfaction').value,
        recommendation: document.querySelector('input[name="recommendation"]:checked')?.value
    };

    console.log(JSON.stringify(formData, null, 2));  // Log the form data as JSON
    postReq(formData)
    
});


function postReq(data){
    let url="https://sheetdb.io/api/v1/4d34sevutizvt"
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

}