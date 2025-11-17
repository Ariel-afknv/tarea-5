document.getElementById('registrarBtn').addEventListener('click', function() {

    let input = document.getElementById('luxInput');
    let resultado = document.getElementById('resultado');
    let valor = input.value.toLowerCase();
    
    let continuarRegistro = true;

    if (valor === 'no') {
        continuarRegistro = false;
    }

    do {
        let lux = parseFloat(valor);
        
        if (lux < 5) {
            resultado.textContent = 'Nivel registrado: ' + lux + ' lux. ¡ALERTA: NOCHE PROFUNDA!';
        } else {
            resultado.textContent = 'Nivel registrado: ' + lux + ' lux.';
        }
        
    } while (false);

    if (!continuarRegistro) {
        resultado.textContent = 'Registro finalizado. El programa se ha detenido.';
        input.disabled = true;
        document.getElementById('registrarBtn').disabled = true;
    }

    input.value = '';
    input.focus();
});