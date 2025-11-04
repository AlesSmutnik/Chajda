import React, { useEffect }from 'react'
import "./InfoPrice.css"
import Logo from '../components/Logo'
// import { Link } from 'react-router-dom'
import "../components/Queries.css"
import ScrollReveal from 'scrollreveal'


const InfoPrice = () => {
    
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 500,
      duration: 1000,
      distance: '100px',
      easing: 'ease-in-out',
    })
  },[])
   
  return <header>
           <Logo /> 
           <main>

            <section className='reveal' >
            <h1 className='title-info-ceny backH1'>Popis Chaloupky</h1>

            <h3 className='title-info'>Vybavení domu </h3>
            <p className=''>V Chaloupce se nachází plně vybavená Kuchyň s jídelnou a krbovými kamny, obývací pokoj s rozkládacím gaučem pro dvě osoby pohodlným křeslem televizí a krbem. V patře se poté nachází dvě obytné mísnosti, jedna s manželskou postelí a druhý pokoj s dvěmi lůžky a rozkládací sedačka. Je možnost i pro rodiny s malými dětmi dát dětskou postýlku do ložnice.nad schody nejdete prostor na odpočinek s gaučem knihovnou a šipkami. Koupelna vybavená vanou,pračkou a samostatné WC.O ohřev vody se stará elektrický boiler. Užitková voda je ze studny a pitná je v ceně formou balené. Dům má plné pokrytí WiFi sítí</p>
            </section>

            <section className='reveal'>
            <h3 className=''> Zahrada </h3>
            <p className=''> Před domem je posezení, plynový gryl nebo gryl na dřevo či uhlí, také pod Pergolovou garáží najdete využíti jako kryté zázemí.</p>
</section>


           
       <section className='reveal'>
       <h1 className='title-info-ceny backH1 '> Oklolí a zážitky </h1>
       
       <h3 className='title-info '>O mestě Rychnov nad Kněžnou</h3>
       <p className=''>Rychnov nad Kněžnou je malebné město nacházející se ve východních Čechách, které nabízí bohatou historii, krásnou přírodu a mnoho   zajímavostí pro návštěvníky. Zde je několik zajímavostí o tomto městě, které mohou zaujmout zájemce o ubytování: </p>
       <p>Rychnovský zámek: Dominantou města je barokní zámek, který byl postaven v 17. století. Zámek je známý svou bohatou výzdobou a krásnými zahradami. V zámku se nachází také muzeum Orlických hor a regionální galerie.</p>
       <p>Kostel Nejsvětější Trojice: Tento barokní kostel je dalším významným historickým objektem města. Jeho stavba byla dokončena v roce 1723 a kostel je známý svým impozantním interiérem.</p>
       <p>Rodný dům Karla Poláčka: Známý český spisovatel Karel Poláček se narodil v Rychnově nad Kněžnou. Jeho rodný dům je dnes muzeem, které připomíná jeho život a dílo.</p>

       <h3 className='title-info'>Přírodní krásy</h3>
       <p>Orlické hory: Rychnov nad Kněžnou je výborným výchozím bodem pro návštěvu Orlických hor. Tato oblast nabízí mnoho turistických a cyklistických tras, které vedou přes krásné lesy, louky a horské vrcholy.</p>
       <p>Přírodní park Orlice: Tento park se rozkládá kolem řeky Orlice a je ideálním místem pro procházky a relaxaci v přírodě. Park nabízí různé naučné stezky a krásné výhledy na okolní krajinu.</p>
</section>   

        <section className='reveal'> 
        <h1 className='title-info-ceny backH1'> Letní a Zimní sezóna </h1>
         
         <h3 className='title-info'>Léto </h3>
         <p>V létě je možnost navštívit nedaleké koupaliště v úžasném prostředí, zajet do nedalekého Vamberku na koupačku a dokonce i Žamberského AqaParku. Do konce je i nedaleko Pastvinská přehrada kde si můžete užít jak koupání tak plavbu na lodích, šlapadlech pedalboardech. Okolí Rychnova nabízí i nádherné cyklo a turistické trasy. </p>

         <h3 className='title-info'>Zima</h3>
         <p>Pro milovníky zimních sportů je  v blízkosti někoik skiareálů ve Zdobnici, Říčkách nebo Deštné v Orlických horách </p>
       
        

</section>
          

     <section className='reveal'>
     <h1 className='title-info-ceny backH1'> Rezervace Termínu </h1>

       <p>Rezervace vašeho termínu je podmíněna uhrazením plné částky za ubytování. </p>

      <h3 className='title-info'>číslo účtu: 2097213019/3030 (Air-Bank)
             Do poznámky u bankovního příkazu uveďte své příjmení kvůli identifikaci platby.</h3>
       <p>          
          Termín lze zrušit 30 dní před nástupem k ubytování bez storno poplatku.
          30 až 15 dní před nástupem termínu 50% ceny nájmu a pod 14dní částka propadá, 
          nic méně chápeme že mohou nastat komplikace a důvodů může býti mnoho a tak Vám dáme 25% slevu na ubytování v novém termínu.  
      </p>
      
</section>

            {/* <section>
              <h1 className='title-info-ceny backH1'>Kontakt </h1>
          <Link to="/ContactForm" className='link-infoceny'>Kontakty na mne</Link>
            </section> */}
           
            <section className='reveal'>
  
     <h1 className='title-info-ceny backH1'>Ceník ubytování</h1>

          <div className='ceník-ubytovani'>
          <h3 className='title-info'>Letní a Zimní sezóna</h3>
            <p>Víkend Pá-Ne - 6500kč</p>
            <p>Týden Po-Ne - 12000Kč</p>
            <p> Pobyt na jeden den 2500Kč </p>
            <h3 className='title-info'>Mimosezóní pobyt </h3>
            <p>Víkend Pá-Ne - 5000kč</p>
            <p>Týden Po-Ne - 9000Kč</p>
            <p> Pobyt na jeden den 2500Kč </p>
            <h3 className='title-info'> Vratná kauce  </h3>
            <p>Vratná kauce je 3000Kč </p>
            <h3 className='title-info'>Příplatky  </h3>
            <p> Elektřina nad Limit v  rámci pobytu  </p>
            <p> Víkend Leto 15KW - 6KčKw</p>
            <p> Týden Leto  50KW - 6KčKw</p>
            <p> Víkend Zima  35KW - 6KčKw</p>
            <p> Týden Zima  70KW - 6KčKw</p>
            <p> Palivové dřevo zima - v ceně zahrnuto připravené dřevo</p>
            <h3 className='title-info'>Úklid </h3>
            <p>Pokud návštěvník nechce dům po odjezdu uvést do původního stavu co se týká úklidu, bude mu účtována částka 2500kč za úklidovou firmu.</p>
          </div>
         
    
            </section>
           
            </main>  
    
    
    </header>
  
  

}

export default InfoPrice