import React, {useState ,useEffect}from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousell from '../components/Carousell';
import CarousellItem from '../components/CarousellItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState'

const App = () =>{
    const initialState = useInitialState(API);
     
    return(
        <div className= "App">
            <Header></Header>   
            
            <Search></Search>
            {initialState.mylist.length > 0 &&( 
            
                <Categories title =" Mi lista">
                         <Carousell>
                        {initialState.mylist.map( items => 
                            <CarousellItem key={item.id}{...item}></CarousellItem>
                        )}
                    </Carousell>       
                </Categories>
            )}
            
            <Categories title =" Tendecias">
                <Carousell>
                    { initialState.trends.map(item =>
                     <CarousellItem key={item.id}{...item} ></CarousellItem>
                    )}          
                </Carousell>
            </Categories>

            <Categories title =" Originales de platzi video">
                <Carousell>
                    {initialState.originals.map(item =>
                    <CarousellItem key ={item.id}{...item}></CarousellItem>   
                    )}
                    
                </Carousell>
            </Categories>
            <Footer></Footer>
        </div>
    );
}
export default App;