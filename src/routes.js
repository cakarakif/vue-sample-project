import Home from './components/Home'
import ContactUs from './components/ContactUs'
import StartPage from './components/StartPage'

export const routes = [
    {path : '*',component:Home, name :'home'},
    {path : '/startpage',component:StartPage, name :'startpage'},
    {path : '/contactus',component:ContactUs, name:'contactus'}
]