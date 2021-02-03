// Get the modal
var modal = document.getElementsByClassName("mymodal")[0];

// Get the button that opens the modal
var btna = document.getElementById("lk1");
var btnb = document.getElementById("lk2");
var btnc = document.getElementById("lk3");
var btnd = document.getElementById("lk4");
var btne = document.getElementById("lk5");
var btnf = document.getElementById("lk6");
var btng = document.getElementById("lk7");
var btnh = document.getElementById("lk8");
var btni = document.getElementById("lk9");
var btnj = document.getElementById("lk10");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btna.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'Educação';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Promove estudos e pesquisas, elabora, incentiva e executa programas de educação presencial e não presencial de educação básica, de formação técnica, profissional e acadêmica, cursos de extensão, inclusive na modalidade de Educação a Distância.';
	document.getElementById('text').innerHTML = valora;
}

btnb.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'ÉTICA, PAZ, CIDADANIA, DIREITOS HUMANOS, PROTEÇÃO À CRIANÇA E AO ADOLESCENTE';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Articula ações junto aos poderes constituídos e a sociedade civil para promoção dos direitos humanos, dos direitos estabelecidos e a consolidação de novos, da democracia, da segurança alimentar e nutricional e de outros valores universais.';
	document.getElementById('text').innerHTML = valora;
}

btnc.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'SAÚDE';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Promove estudos, pesquisas e ações e/ou apoia iniciativas que visem a qualidade de vida da sociedade, por meio difusão da equidade no sistema de saúde brasileiro, do incentivo ao desenvolvimento dos cuidados primários de saúde, entendendo a saúde como direito fundamental do ser humano.';
	document.getElementById('text').innerHTML = valora;
}

btnd.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'Cultura';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Provome estudos, pesquisas e ações, colaborando com empreendimentos públicos e/ou privados, que visem a defesa e preservação e a formação do patrimônio cultural e artístico material e imaterial brasileiro nas diversas linguagens e segmentos culturais. ';
	document.getElementById('text').innerHTML = valora;
}

btne.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'Artes e Letras';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Provome estudos, pesquisas e ações e/ou apoia iniciativas que visem difundir as letras e a literaturas brasileira, incentiva e promove o gosto pela leitura, preserva e difunde o patrimônio artístico e literário, desenvolve e executa projetos editoriais de livros e periódicos em suportes diversos impressos e eletrônicos (audiolivros, e-books, DVDs, vídeos etc); ';
	document.getElementById('text').innerHTML = valora;
}

btnf.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'ÉTICA, PAZ, CIDADANIA, DIREITOS HUMANOS, PROTEÇÃO À CRIANÇA E AO ADOLESCENTE';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Articula ações junto aos poderes constituídos e a sociedade civil para promoção dos direitos humanos, dos direitos estabelecidos e a consolidação de novos, da democracia, da segurança alimentar e nutricional e de outros valores universais.';
	document.getElementById('text').innerHTML = valora;
}

btng.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'DESENVOLVIMENTO REGIONAL';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Promove estudos, pesquisas e ações e/ou apoia iniciativas voltadas para promoção do desenvolvimento econômico e social e combate à pobreza, além do incentivo à criação de microempresas e ao fomento do associativismo em suas variadas formas.';
	document.getElementById('text').innerHTML = valora;
}

btnh.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'ÉTICA, PAZ, CIDADANIA, DIREITOS HUMANOS, PROTEÇÃO À CRIANÇA E AO ADOLESCENTE';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Articula ações junto aos poderes constituídos e a sociedade civil para promoção dos direitos humanos, dos direitos estabelecidos e a consolidação de novos, da democracia, da segurança alimentar e nutricional e de outros valores universais.';
	document.getElementById('text').innerHTML = valora;
}

btni.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'ÉTICA, PAZ, CIDADANIA, DIREITOS HUMANOS, PROTEÇÃO À CRIANÇA E AO ADOLESCENTE';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Articula ações junto aos poderes constituídos e a sociedade civil para promoção dos direitos humanos, dos direitos estabelecidos e a consolidação de novos, da democracia, da segurança alimentar e nutricional e de outros valores universais.';
	document.getElementById('text').innerHTML = valora;
}

btnj.onclick = function(e) {
	e.preventDefault();
	modal.style.display = "block";
	var titulo = 'ÉTICA, PAZ, CIDADANIA, DIREITOS HUMANOS, PROTEÇÃO À CRIANÇA E AO ADOLESCENTE';
	document.getElementById('titlemodal').innerHTML = titulo;
	var valora = 'Articula ações junto aos poderes constituídos e a sociedade civil para promoção dos direitos humanos, dos direitos estabelecidos e a consolidação de novos, da democracia, da segurança alimentar e nutricional e de outros valores universais.';
	document.getElementById('text').innerHTML = valora;
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}