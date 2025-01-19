const template = document.createElement('template');
template.innerHTML = 
`
<header>
 <a href="/"><h1>Poēticum</h1></a>
<p>
Poésie&nbsp;en&nbsp;prose&nbsp;par&nbsp;Roberto&nbsp;Q.&nbsp;S.
</p>
</header>

<nav id="headernav"> 

<a href="/"><button class="home"></button></a>
  
<button tabindex="1">
<i class="navbtn" tabindex="1"></i>
Poèmes
<ul class="left">
	<li><a href="aedis-aestusque-fr"><i>Aedis aestusque</i></a></li>
	<li><a class="not"><i>Locus errans</i></a></li>
	<li><a class="not"><i>Plateaux planétaires</i></a></li>
	<li><a class="not"><i>Les lianes éternelles</i></a></li>
	<li><a class="not"><i>The mycélium de l'aube</i></a></li>
	<li><a class="not"><i>Gouttes ignées</i></a></li>
	<li><a class="not"><i>La caverne</i></a></li>
	<li><a class="not"><i>Lare laminaire</i></a></li>
		<hr>
	<li><a class="not"><i>Humeurs spiritueux<br>miscellanés</i></a></li>
</ul>
</button>
 
<button class="rt" tabindex="1">
  <i class="navbtn" tabindex="1"></i>
  Commentaires
   <ul class="right">
        <li><a class="not">De ma poésie</a></li>
        <li><a class="not">De la science-fiction</a></li>
   </ul>
</button>
 
</nav> 

`
document.body.appendChild(template.content);
