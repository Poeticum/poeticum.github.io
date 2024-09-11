const template = document.createElement('template');
template.innerHTML = 
`
<header>
 <a href="/"><h1>Poēticum</h1></a>
<p>
Poesía&nbsp;en&nbsp;prosa&nbsp;por Roberto&nbsp;Q.&nbsp;S.
</p>
</header>

<nav id="headernav"> 

<a href="/"><button class="home"></button></a>
  
<button tabindex="1">
  <i class="navbtn" tabindex="1"></i>
  Poemas
   <ul class="left">
    <li><a href="locus-errans.html"><i>Locus errans</i></a></li>
    <li><a href="aedis-aestusque.html"><i>Aedis aestusque</i></a></li>
    <li><a href="cumbres-planetarias.html"><i>Cumbres planetarias</i></a></li>
    <li><a href="las-lianas-eternas.html"><i>Las lianas eternas</i></a></li>
    <li><a href="el-micelio-del-amanecer.html"><i>El micelio del amanecer</i></a></li>
   <li><a href="gotas-igneas.html"><i>Gotas ígneas</i></a></li>
   <li><a href="la-caverna.html"><i>La caverna</i></a></li>
   <li><a href="lar-laminar.html"><i>Lar laminar</i></a></li>
     <hr>
        <li><a href="humores-espirituosos-miscelaneos.html"><i>Humores espirituosos<br>misceláneos</i></a></li>
   </ul>
</button>
 
<button class="rt" tabindex="1">
  <i class="navbtn" tabindex="1"></i>
  Comentarios
   <ul class="right">
        <li><a href="sobre-mi-poesia.html">Sobre mi poesía</a></li>
        <li><a href="sobre-la-ciencia-ficcion.html">Sobre la ciencia ficción</a></li>
   </ul>
</button>
 
</nav> 

`
document.body.appendChild(template.content);
