const logOriginal = console.log;
const errorOriginal = console.error;
const warnOriginal = console.warn;

function appendLog(texto, clase) {
    const $logsDiv = $('#logs');
    if (!$logsDiv.length) return;
    const $nuevoLog = $('<div>').addClass(`terminal__log-item ${clase}`).text(texto);
    $logsDiv.append($nuevoLog);
    const $contenedor = $('#consola-pantalla');
    $contenedor.scrollTop($contenedor[0].scrollHeight);
}

console.log = function(...args) {
    logOriginal.apply(console, args);
    const $logsDiv = $('#logs');
    if ($logsDiv.length) {
        const $nuevoLog = $('<div>').addClass('terminal__log-item');
        let texto = args[0];
        if (typeof texto === 'string' && texto.startsWith('%c')) {
            texto = texto.replace('%c', '');
            $nuevoLog.css({ color: '#00ff00', fontWeight: 'bold' });
            $nuevoLog.text(`> ${texto} ${args.slice(2).join(' ')}`);
        } else {
            $nuevoLog.text(`> ${args.join(' ')}`);
        }
        $logsDiv.append($nuevoLog);
        const $contenedor = $('#consola-pantalla');
        $contenedor.scrollTop($contenedor[0].scrollHeight);
    }
};

console.error = function(...args) {
    errorOriginal.apply(console, args);
    appendLog(`✖ ERROR: ${args.join(' ')}`, 'terminal__log-item--error');
};

console.warn = function(...args) {
    warnOriginal.apply(console, args);
    appendLog(`⚠ WARN: ${args.join(' ')}`, 'terminal__log-item--warn');
};


let retos = [];
let indexActual = 0;

async function cargarListaRetos() {
    try {
        const response = await fetch('retos.json');
        const archivos = await response.json();

        retos = archivos.map(archivo => {
            const nombreBase = archivo.replace('.js', '');
            const palabras = nombreBase.split(/[-_]/).map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            );
            return { nombre: palabras.join(' '), archivo };
        });

    } catch (e) {
        logOriginal("No se encontró retos.json:", e);
        retos = [];
    }

    const $optionsContainer = $('.custom-select__options');
    $optionsContainer.empty();

    if (retos.length === 0) {
        $('#nombre-reto-label').text("Sin archivos .js");
        $('#nombre-reto').text("Listo");
        return;
    }

    retos.forEach((reto, index) => {
        const $option = $('<div>')
            .addClass('custom-select__option')
            .attr('data-value', index)
            .text(reto.nombre);
        $optionsContainer.append($option);
    });

    ejecutarReto(0);
}

function ejecutarReto(index) {
    if (index < 0 || index >= retos.length) return;
    indexActual = index;
    
    $('#nombre-reto').text(retos[index].nombre);
    $('#nombre-reto-label').text(retos[index].nombre);
    $('#logs').empty();
    $('.dinamico').remove();
    
    const $script = $('<script>')
        .attr('type', 'module')
        .attr('src', `${retos[index].archivo}?t=${Date.now()}`)
        .addClass('dinamico');
        
    $('body').append($script);
}

function siguienteReto() {
    if (retos.length === 0) return;
    let proximoIndex = (indexActual + 1) % retos.length;
    ejecutarReto(proximoIndex);
}

$(document).ready(function() {
    $('.custom-select__trigger').on('click', function(e) {
        e.stopPropagation();
        if (retos.length > 0) {
            $('.custom-select').toggleClass('custom-select--open');
        }
    });

    $(document).on('click', function() {
        $('.custom-select').removeClass('custom-select--open');
    });

    $('.custom-select__options').on('click', '.custom-select__option', function() {
        const valor = Number($(this).data('value'));
        ejecutarReto(valor);
    });

    $('#btn-siguiente').on('click', siguienteReto);
    $('#btn-reejecutar').on('click', function() {
        ejecutarReto(indexActual);
    });

    cargarListaRetos();
});
