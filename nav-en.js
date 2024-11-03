const template = document.createElement('template');
template.innerHTML = 
`
<header>
 <a href="/"><h1>Poēticum</h1></a>
<p>
Prose&nbsp;poetry&nbsp;by Roberto&nbsp;Q.&nbsp;S.
</p>
</header>

<nav id="headernav"> 

<a href="/"><button class="home"></button></a>
  
<button tabindex="1">
<i class="navbtn" tabindex="1"></i>
Poems
<ul class="left">
	<li><a href="aedis-aestusque-en"><i>Aedis Aestusque</i></a></li>
	<li><a href="locus-errans-en"><i>Locus Errans</i></a></li>
	<li><a class="not"><i>Planetary Summits</i></a></li>
	<li><a class="not"><i>The Eternal Vines</i></a></li>
	<li><a class="not"><i>The Mycelium of Dawn</i></a></li>
	<li><a class="not"><i>Igneous Drops</i></a></li>
	<li><a class="not"><i>The Cavern</i></a></li>
	<li><a class="not"><i>Laminar Lar</i></a></li>
		<hr>
	<li><a class="not"><i>Miscelaneous spirituous<br>humours</i></a></li>
</ul>
</button>
 
<button class="rt" tabindex="1">
  <i class="navbtn" tabindex="1"></i>
  Commentaries
   <ul class="right">
        <li><a class="not">On My Poetry</a></li>
        <li><a class="not">On Science Fiction</a></li>
   </ul>
</button>
 
</nav> 

`
document.body.appendChild(template.content);
