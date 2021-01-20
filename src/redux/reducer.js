import { SERVICES } from '../components/Services';
import { PROVIDERS } from '../components/Providers';

export const initialState = {
    services: SERVICES,
    providers: PROVIDERS,
    activeProviders: [],
}

export const Reducer = (state = initialState, action) =>{
    return state;
}