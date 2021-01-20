import React, {Fragment } from 'react';
import axios from 'axios';

class Services extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            services: [],
          }
    }
    async componentDidMount(){
        const serviceList = await axios.get('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services');
        const serviceSet = new Set();
        let updatedServices = []; 
        for(const currentService of serviceList.data.data){
          const name = currentService.attributes.name
          if(!serviceSet.has(name)){
            serviceSet.add(name)
            updatedServices.push(currentService);
          }
        }
        this.setState({
          services: updatedServices
        })
      }

    getProviders=(providerName)=>{
          //console.log('Provider Name: ', providerName);
          const activeProviders=this.state.providers.filter((currentProviders)=>{
          // console.log(currentProviders.attributes); 
          return currentProviders.attributes.subspecialties.includes(providerName);
          })
      
          //console.log(activeProviders);
          this.setState({
          activeProviders: activeProviders
          })
      }  

    render(){
        console.log('Services Props: ',this.props)
        return(
            <Fragment>
                <h5>SERVICES</h5>
                <hr/>
                <ul>
                {this.state.services.map((service, index)=> <li key={index} onClick={()=>this.getProviders(service.attributes.name)}>{service.attributes.name}</li>
                )}
                </ul>
            </Fragment>
        );
    }
}

export default Services;