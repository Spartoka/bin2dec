function convert() {
	const binary = document.getElementById('bin-input').value;
	if (binary == '') return alert('Por favor insira um número');
	binary.split('').map((char) => {
		if (char !== '0' && char !== '1') return alert('Por favor insira um valor em binario valido');
	});
	const decimal = parseInt(binary, 2);
	document.getElementById('dec-output').value = decimal;
}