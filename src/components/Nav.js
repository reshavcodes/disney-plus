import React from 'react'
import styled from 'styled-components'


function Navs() {
    return (
        <NavMenu>
        <a href="https://www.google.com">
          <img src="/images/home-icon.svg" alt="logo.svg" />
          <span>HOME</span>
        </a>

        <a href="https://www.google.com">
          <img src="/images/search-icon.svg" alt="logo.svg" />
          <span>SEARCH</span>
        </a>

        <a href="https://www.google.com">
          <img src="/images/watchlist-icon.svg" alt="logo.svg" />
          <span>WATCHLIST</span>
        </a>

        <a href="https://www.google.com">
          <img src="/images/original-icon.svg" alt="logo.svg" />
          <span>ORIGINALS</span>
        </a>

        <a href="https://www.google.com">
          <img src="/images/movie-icon.svg" alt="logo.svg" />
          <span>MOVIES</span>
        </a>

        <a href="https://www.google.com">
          <img src="/images/series-icon.svg" alt="logo.svg" />
          <span>SERIES</span>
        </a>

        <a href="https://www.google.com">
          <img src="/images/kids-icon.svg" alt="logo.svg" />
          
        </a>

      </NavMenu>
    )
}

export default Navs


const NavMenu = styled.div`
display: flex;
flex:1;
margin-left: 25px;
align-items: center;
a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    

    
    
    img{
        height: 20px;
    }
    


    &:hover{
      span:after{
        opacity:1;
        transform:ScaleX(1);
      }
}

    span{
        font-size: 14px;
        letter-spacing: 1.4px;
        position: relative;
        &:after {
          content: "";
          height:2px;
          background: white;
          position: absolute;
          right:0;
          left:0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transform: ScaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
          border-radius: 2px;
      }
        

        
    }
    
`