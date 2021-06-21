import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'


export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'

    },
    {
        title: 'About',
        path: '/about',
        icon:<FaIcons.FaAddressBook/>,
        cName:'nav-text'

    },
    {
        title: 'Education',
        path: '/education',
        icon:<FaIcons.FaBookReader/>,
        cName:'nav-text'

    },
    {
        title: 'Skills',
        path: '/skills',
        icon:<FaIcons.FaCogs/>,
        cName:'nav-text'

    },
    {
        title: 'Experience',
        path: '/experience',
        icon:<FaIcons.FaBriefcase/>,
        cName:'nav-text'

    },
    {
        title: 'Projects',
        path: '/projects',
        icon:<GoIcons.GoProject/>,
        cName:'nav-text'

    },
    {
        title: 'Contact Me',
        path: '/contact',
        icon:<FaIcons.FaIdCardAlt/>,
        cName:'nav-text'

    },
    
   

]
    



