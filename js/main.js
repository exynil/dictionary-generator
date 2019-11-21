var generator = new Generator();

document.getElementById('generate').onclick = function () {
    let odd_and_even = document.getElementById('odd_and_even').selectedIndex;
    let order = document.getElementById('order').selectedIndex;
    let unique = document.getElementById('unique').selectedIndex;

    let interval = document.getElementById('interval').value;
    let output = document.getElementById('output');

    output.value = generator.generate(odd_and_even, order, unique, parseInt(interval));
}

document.getElementById('download').onclick = function () {
    generator.addIndent();
    let content = "Data:\n" + generator.getDictionary() + "Initial: 0\nFinal: 3ff\n";
    download(content, 'dictionary.dp', 'text/txt');
}

document.getElementById('output').onkeyup = function () {
    generator.setDictionary(this.value);
}

function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}