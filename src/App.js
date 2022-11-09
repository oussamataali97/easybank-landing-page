import {Navbar,Hero,Articles,Footer,Objectif} from './components'

const App = ()=>
  (
    <div className="w-full overflow-hidden ">
      <div className="navbar z-[1000]">
      <Navbar/>
      </div>
      <div className="contenu z-[200] ">
      <Hero/>
      <Objectif/>
      <Articles/>
      <Footer/>
      </div>


    </div>
  );


export default App;
