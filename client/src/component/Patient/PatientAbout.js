import React, { Component } from 'react';
import Navber from './PatientNavbar';
import { MDBContainer } from 'mdbreact';
import Homeimage from '../Homeimage';
import Footer from '../Footer';

class PatientAbout extends Component {
    
    render() { 
        return ( 
            <div className = "bg-dark">
                <Navber/>
                <Homeimage/>

                <br>
                
                </br>
                <br>
                
                </br>
                <h1 className="head text-white" align="center"> About Us </h1>
                <br>
                
                </br>
                <br>
                
                </br>

            <MDBContainer>  
            <blockquote className="blockquote">
            <p className="text-white"> Lifescape Hospital Ltd is the premier private healthcare provider of Eastern Africa, with three super specialty hospitals at Karen, Lavington, and Membley Estate, in Kenya, a state-of-the-art daycare centre on Southern Avenue in Karen, and another super specialty hospital at Lavington, Nairobi. The Group takes care of around 340000 patients annually, conducting more than 15,000 successful surgeries, with a roster of more than 5,000 healthcare professionals. An impressive roster of more than 600 doctors and a well-trained force of nursing staff work tirelessly across more than 17000 beds across its four hospitals, backed by advanced technologies and latest equipment to treat people and save lives. With major changes and developments on its plate, the Lifescape Hospital Group is headed towards a path of steady growth. LifeScape Hospitals Ltd is all set to add around 7000 beds in the near future.

            Lifescape Hospital brings to the table a class of its own, making the healthcare group a major player in keeping Eastern Africa ahead of the curve. The Group treats more than 3.5 lakh people every year and conducts around 15,000 surgeries annually, providing value-for-money services, backed by advanced equipment and latest technologies. The hallmark of Landscape Hospitals is a committed team of doctors and caregivers, who take up the challenge of treating the most complicated cases, besides stepping up to handle Emergency and Critical Care with dedication, expertise and compassion. Over the last three decades, the healthcare Group has made immense contributions to the lives of people, not just from Kenya and the rest of Eastern Africa, but also from other Africa and the world.
            </p>
            </blockquote>

           
            </MDBContainer> 
            
            <br>
            
            
            </br>
            <Footer/>
        
            </div>
         );
    }
}
 
export default PatientAbout;