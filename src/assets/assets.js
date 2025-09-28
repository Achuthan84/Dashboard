import Dashboard from '../assets/dashboard.png'
import Analytics from '../assets/analytics.png'
import Contact from '../assets/contact.png'
import Mail from '../assets/mail.png'
import Calendar from '../assets/calendar.png'
import Settings from '../assets/settings.png'
import Logout from '../assets/Logout.png'
import bell from '../assets/bell.png'
import moon from '../assets/moon.png'
import search from '../assets/search.png'
import logo from '../assets/Logo.png'
import menu from '../assets/menu.png'
import user from '../assets/user.jpg'
import money from '../assets/money.png'
import profit from '../assets/profit.png'
import adjust from '../assets/adjustments.png'
import report from '../assets/report.png'

export const assets = {
    logo,
    Logout,
    bell,
    moon,
    search,
    menu,
    user,
    money,
    profit,
    adjust,
    report,

}

export const categories = [
    {
        name: "Dashboard",
        icon: Dashboard,
        active: true,
    },
    {
        name: "Analytics",
        icon: Analytics,

    },
    {
        name: "Contacts",
        icon: Contact,

    },
    {
        name: "Mail",
        icon: Mail,

    },
    {
        name: "Calendar",
        icon: Calendar,

    },
    {
        name: "Settings",
        icon: Settings

    }
];


export const INVOICES = [
    {
        id: 1,
        customer: { name: 'Arlene McCoy' },
        user: user,
        date: '31 Aug 2023',
        amount: '3,230.2',
        productId: '001423',
        status: 'Paid',
    },
    {
        id: 2,
        customer: { name: 'Jacob Jones' },
        user: user,
        date: '30 Aug 2023',
        amount: '5,630.5',
        productId: '004533',
        status: 'Unpaid',
    },
    {
        id: 3,
        customer: { name: 'Marvin Butcher' },
        user: user,
        date: '30 Aug 2023',
        amount: '4,230.0',
        productId: '001784',
        status: 'Paid',
    },
    {
        id: 4,
        customer: { name: 'Ralph Edwards' },
        user: user,
        date: '29 Aug 2023',
        amount: '3,082.2',
        productId: '001515',
        status: 'Paid',
    },
    {
        id: 5,
        customer: { name: 'Esther Howard' },
        user: user,
        date: '28 Aug 2023',
        amount: '1,550.0',
        productId: '001299',
        status: 'Unpaid',
    }
];

export const data = [
    { name: 'Sun', earnings: 12000 },
    { name: 'Mon', earnings: 5000 },
    { name: 'Tue', earnings: 12500 },
    { name: 'Wed', earnings: 9500 },
    { name: 'Thu', earnings: 16000 },
    { name: 'Fri', earnings: 4800 },
    { name: 'Sat', earnings: 12000 },
];