

import React from 'react'
import { Link } from 'react-router-dom'
import { Icon,Button } from 'semantic-ui-react'
import l from '../images/Logo/l.png'
import c from '../images/Logo/c.png'

 const Nav = () => {
    return (
        <div className="main_div_A">
            <div className="div_logo">
                <div id='the_logos' >
                    <div style={{display: 'inline-block',textAlign:'center',marginRight:'2%'}}>
                        <img src={l} alt="logo PACHACHACA"/>
                        <p>PACHACHACA</p>
                    </div>
                    <div style={{display: 'inline-block',textAlign:'center'}}>
                        <span> <img src={c} alt="logo PACHACHACA"/></span>
                        <p>Yoreem</p>
                    </div>
                </div>
                <div style={{textAlign: 'right'}} className="color_div_ ulN">
                    
                    <p className="ulN"> <a href='https://www.facebook.com/PachachacaCalca' target='_blank'>
                    <Icon circular className='sossial_icon'   name='facebook' size='large'/></a></p>
                    <p className="ulN"><a href='https://www.instagram.com/pachachaca.calca/' target='_blank'>
                    <Icon circular className='sossial_icon'   name='instagram' size='large'/></a></p>
                    <br/>
                    {/* <Button compact><Link to='/contact'>Donate Now</Link></Button> */}
                    <Link to='/contact'><Button compact>Contact Us</Button></Link>
                </div>

                   
                    
                    
                
            </div>
            
            
            <div className="color_div_ ">
                <div  className="ui menu ">
                    <div className="item"><Link to='/'>Home</Link></div>
                    <div className="item"><Link to='/blog'>Programs</Link></div>
                    <div className="item"><Link to='/vision-mission'>Vision & Mission</Link></div>
                    <div className="item"><Link to='/about'>Who are we</Link></div>
                    <div className="item"><Link to='/albums'>Photos</Link></div>
                    <div className="item"><Link to='/Newsletter'>Newsletter</Link></div>
                    <div className="item"><Link to='/donation'>Donation</Link></div>
                </div>  
            </div>
            
        </div>
    )
}
export default Nav

