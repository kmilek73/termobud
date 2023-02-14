import React from 'react';



function Nav () {
  
    return (
        <div className="sticky-top">
            <header>
    
                <div className="header_container ">
                    <div className="header_cont">
                        <div className="header_termobud">
                            <h1><span className="red">TERMO</span><span className="black">BUD</span></h1>
                        </div>
                        <nav>
                            <input type="checkbox" id="check" />
                            <label htmlFor="check" className="checkbtn">
                             <i className="fas fa-bars"></i>
                            </label>
    
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index.html">Usługi</a></li>
                                <li><a href="index.html">Piece CO</a></li>
                                <li><a href="index.html">Klimatyzacje</a></li>
                                <li><a href="index.html">Pompy ciepła</a></li>
                                <li><a href="index.html">Kontakt</a></li>
                            </ul>
                        </nav>
    
    
    
                    </div>
    
                </div>
            </header>
    
        </div>
    )
  
}export default  Nav;


