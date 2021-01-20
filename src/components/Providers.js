import React,{Fragment} from 'react';
import axios from 'axios';

class Providers extends React.Component{
    constructor(props){
    super(props);

    this.state = {
        providers: [],
        activeProviders: [],
        }
    }

    async componentDidMount(){
        const providersList = await axios.get('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10');  
        this.setState({
          providers: providersList.data.data,
        })
      }

    render(){
        console.log('Provider Props: ',this.props)
        return(
            <Fragment>
                <h5>PROVIDERS</h5>
                <hr/>
                {this.props.data}
                <ul>
                {
                this.state.activeProviders.map((provider)=><li key={provider.id}>{provider.attributes.name}</li>)
                }
                </ul>
            </Fragment>
        );
    }
}

export default Providers;