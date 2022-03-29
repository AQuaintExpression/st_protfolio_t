import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import styled from 'styled-components';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PhotoCameraIcon />
                </IconButton>
            </LogoWrapper>

            <HomePageButton>
                <a href="/">Homepage </a>
            </HomePageButton>
            {/* 
            <FollowingBotton>
                <a href="/">Following </a>
            </FollowingBotton> */}
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" />
                        <button type="submit"></button>

                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <GitHubIcon />
                </IconButton>


                <IconButton>
                    <LinkedInIcon />
                </IconButton>


                <IconButton>
                    <InstagramIcon />
                </IconButton>


                <IconButton>
                    <FacebookIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`

const HomeButtons = styled.div`
display: flex;
height: 48px;
min-width: 123px;
align-items: center;
justify-content: center;
border-radius: 24px;
cursor: pointer;
`


const HomePageButton = styled(HomeButtons)`

    background: rgb(17, 17, 17);

    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`


// const FollowingBotton = styled(HomeButtons)`

//     background: white;

//     a {
//         text-decoration: none;
//         color: black;
//         font-weight: 700;
//     }
// `

const SearchWrapper = styled.div`
    // the div will have a weight of 1. This will make it so that it takes all the available space.
    flex: 1; 
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    boarder: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input:focus {
        outline: none;
    }

`

const IconsWrapper = styled.div``