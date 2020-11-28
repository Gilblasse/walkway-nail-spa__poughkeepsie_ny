import React from 'react'
import { Link } from "react-router-dom";
import {links} from '../components/NavBar/links'
import { motion } from "framer-motion"
import { menuOpenState } from '../globalState';
import { useRecoilState } from 'recoil'

export default function MenuOverlay() {

    const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuOpenState)

    const handelRemoveOverlay = () => setIsMenuOpen(false)
    

    return (
        <>
                  
            {
              isMenuOpen 
              && (
                <>
                  <motion.div 
                    id="menu-overlay" 
                    initial={{scale: 1}}
                    animate={{scale: 50.5}}
                    transition={{ duration: .8 }}
                    onClick={handelRemoveOverlay}
                  >
                  </motion.div>

                  <motion.div 
                    id="close-menu"
                    initial={{opacity: 0}}
                    animate={{opacity: .8}}
                    transition={{delay: 1}}
                    onClick={handelRemoveOverlay}
                    >
                    <span></span>
                  </motion.div>


                  <div 
                    id="menu-overlay-content-wrapper"
                    onClick={handelRemoveOverlay}
                  >
                    <ul>
                        {
                          links.map(({name, location},i) => (
                            <li key={i}>
                              <motion.div
                                initial={{y: 60}}
                                animate={{y: 0}}
                                transition={{ duration: .8, delay: (i + 5) / 10 }}

                              >
                                <Link to={location}>{name}</Link>
                              </motion.div>
                            </li>
                          ))
                        }
                    </ul>
                  </div> 
                </>
              )
            }
        </>
    )
}
