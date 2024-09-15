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
    <li><a href="cumbres-planetarias"><i>Planetary Summits</i></a></li>
    <li><a href="las-lianas-eternas"><i>The Eternal Vines</i></a></li>
    <li><a href="el-micelio-del-amanecer"><i>The Mycelium of Dawn</i></a></li>
    <li><a href="gotas-igneas"><i>Igneous Drops</i></a></li>
    <li><a href="la-caverna"><i>The Cavern</i></a></li>
    <li><a href="lar-laminar"><i>Laminar Lar</i></a></li>
      <hr>
    <li><a href="humores-espirituosos-miscelaneos"><i>Miscelaneous spirituous<br>humours</i></a></li>
   </ul>
</button>
 
<button class="rt" tabindex="1">
  <i class="navbtn" tabindex="1"></i>
  Commentaries
   <ul class="right">
        <li><a href="sobre-mi-poesia.html">On My Poetry</a></li>
        <li><a href="sobre-la-ciencia-ficcion.html">On Science Fiction</a></li>
   </ul>
</button>
 
</nav> 

`
document.body.appendChild(template.content);
