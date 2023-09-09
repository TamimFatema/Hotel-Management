import React from 'react'
import BodyComponent from './body/body'
import HeaderComponent from './header/header';
import FooterComponent from './footer/footer';

const MainComponent = () => {
    return (
        <div><HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
            <FooterComponent></FooterComponent>

        </div>
    )
}

export default MainComponent
