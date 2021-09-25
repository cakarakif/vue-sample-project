import Home from './components/Home'
import ContactUs from './components/ContactUs'

export const routes = [
    {path : '*',component:Home, name :'home'},
    {path : '/contactus',component:ContactUs, name:'contactus'}
]