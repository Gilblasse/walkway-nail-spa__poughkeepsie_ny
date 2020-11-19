import React, {useEffect, useState} from 'react'
import { Redirect, withRouter } from "react-router";
import nylas from '../../resources/Nylas';
import BookingCard from '../../components/BookingCard/BookingCard'
import nailTechs from './data'
import PageTemplate from '../PageTemplate/PageTemplate';
import Hero from '../../components/Hero/Hero';
import './BookingPage.scss'
import WrapperContainer from '../WrapperContainer';
import BookingCards from '../../components/BookingCards';
import BookingCalendar from '../../components/BookingCalendar';


function BookingPage({location}) {
    
    const [token, setToken] = useState()
    const [adminName, setAdminName] = useState()
    const [isCal, setIsCal] = useState(false)
    const [cal, setCal] = useState({link: null, name: null})
    
    useEffect(()=>{
        location.search !== "" && getToken(location.search)
    },[])

    useEffect(()=>{
        if(token){
            getCalendar()
        }
    },[token])

    useEffect(()=>{
        adminName && openSchduler()
    }, [adminName])


  
    const getCalendar = () => {
       const configObj = {
            method: "Get",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

       fetch('https://api.nylas.com/account', configObj)
       .then(res => res.json())
       .then(data => setAdminName(data.name))
       .catch(err => console.log({err}))

       fetch('https://api.nylas.com/events', configObj)
       .then(res => res.json())
       .then(data => console.log({data}))
       .catch(err => console.log({err}))
    }
  

    const openSchduler = () => {
        const config = {
            auth: {
              // Account access_token with active calendar scope
              accessToken: token, 
            },
            style: {
              // Style the schedule editor
              tintColor: '#32325d',
              backgroundColor: 'white',
            },
            defaults: {
              event: {
                title: `Walkway Nail Tech ${adminName} - 60min`,
                duration: 60,
              },
            },
        } 

        nylas().scheduler.show(config)
    }


    const getToken = search => {
        const kVal = search.split('&').find(info => info.includes('access_token'))
        const token = kVal.slice(kVal.indexOf("=") + 1)
        console.log({token})
        
        setToken(token)
    }



    const setBookingCal = ({name, link}) => {
        setIsCal(true)
        setCal({name, link})
        // setCal(link)
        // setIsCal(!isCal)
    }

    const handleClick = () => setIsCal(false)
    

    return (
            <div className="BookingPage">
                <Hero title="Booking"/>
                {/* <button>
                    <a href={`https://api.nylas.com/oauth/authorize?client_id=${process.env.REACT_APP_NYLAS_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/book-appointment&scopes=calendar`}>
                        Admin Login
                    </a>
                </button> */}

                {
                    isCal
                    ? (
                        <>
                            <button onClick={handleClick}>BACK</button>
                            <BookingCalendar bookingCal="http://schedule.nylas.com/nethelbert-blasse-30min"/>
                        </>
                    )
                    : (
                            <div className="booking-cards">
                                {
                                    nailTechs.map((tech, i) => <BookingCard key={i}  setBookingCal={setBookingCal} nailTech={tech}/>)
                                }
                            </div>
                    )
                }
                

                
                
            </div>
    )
}

export default withRouter(BookingPage)