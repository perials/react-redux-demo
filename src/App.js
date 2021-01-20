import React,{Component} from 'react';
import Services from './components/Services';
import Providers from './components/Providers';

import { Provider, connect } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();
const mapStateToProps = state => {
  return {
    services: state.services,
    providers: state.providers,
    activeProviders: state.activeProviders
  }
}
class App extends Component {
  constructor(props){
    super(props);
  }

  
  render(){
    return (
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <Services />
            </div>
            <div className="col s5 offset-s1">
              <Providers />
            </div>
          </div>   
        </div>
      </Provider>
    )
  }
  
}

export default (connect(mapStateToProps)(App));
