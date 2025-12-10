// Fecha del evento: Viernes 09/01/2026 10:30hs
const weddingDate = new Date("Jan 09, 2026 10:30:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar en el HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la fecha ya pasó
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "¡Llegó el gran día!";
    }
}, 1000);

// Función simple para copiar alias
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Alias copiado: ' + text);
    }, function(err) {
        console.error('Error al copiar: ', err);
    });
}