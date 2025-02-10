// app.js
document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const prediction1 = document.getElementById('prediction1').value;
    alert('¡Gracias por tu predicción para el partido 1! Tu predicción: ' + prediction1);
});

document.getElementById('predictionForm2').addEventListener('submit', function(event) {
    event.preventDefault();
    const prediction2 = document.getElementById('prediction2').value;
    alert('¡Gracias por tu predicción para el partido 2! Tu predicción: ' + prediction2);
});
