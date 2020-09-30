import React from 'react';
import '../assets/styles/components/Carousell.scss';

const Carousell = ({children}) =>(
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
);
export default Carousell; 