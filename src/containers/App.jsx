import React, {useState ,useEffect}from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousell from '../components/Carousell';
import CarousellItem from '../components/CarousellItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () =>{
    const [ videos , setVideos] = useState([]);
    
    useEffect(()=>{
        //prender servidor --json-server initialState.json  
        fetch("http://localhost:3000/initalState")
            .then(response => response.json())
            .then(data => setVideos(data));
    },[]);
    console.log(videos)
    return(
        <div className= "App">
            <Header></Header>   
            
            <Search></Search>
            
            <Categories title =" Mi lista">
                <Carousell>
                    <CarousellItem></CarousellItem>
                    <CarousellItem></CarousellItem>
                    <CarousellItem></CarousellItem>
                    <CarousellItem></CarousellItem>
                    <CarousellItem></CarousellItem>
                    <CarousellItem></CarousellItem>
                    <CarousellItem></CarousellItem>
                
                </Carousell>
            </Categories>
            <Categories title =" Tendecias">
                <Carousell>
                    <CarousellItem></CarousellItem>
                    <CarousellItem></CarousellItem>   
                </Carousell>
            </Categories>
            <Categories title =" Originales de platzi video">
                <Carousell>
                    <CarousellItem></CarousellItem>   
                </Carousell>
            </Categories>
            <Footer></Footer>
        </div>
    );
}
export default App;