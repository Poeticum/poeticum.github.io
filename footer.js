const template = document.createElement('template');
template.innerHTML = 
`
<footer id="pie">
<a href="https://github.com/poeticum">Roberto Q. S.</a><br>
Mi obra original está bajo la licencia internacional<br>
	<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es">CC BY-NC-ND 4.0</a> o posterior.<br>
<i>Cōgitō ergō quaerō</i>&nbsp;&middot;&nbsp;πάντα ῥεῖ
 </footer>

`
document.body.appendChild(template.content);
