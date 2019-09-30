import React, { useState, useRef } from "react";
import "semantic-ui-css/semantic.min.css";

// semantic components
import { Divider, Icon, Menu, Sidebar } from "semantic-ui-react";

// import NavBar from "./NavBar";
import NewsContainer from "./NewsContainer";
import BandsInTown from "./BandsInTown";
import Video from "./Video";
import Bio from "./Bio";
import Contact from "./Contact";
import styled from 'styled-components'

const RefDivider = styled.div`
    height: 5hv;
    min-height: 3rem;
`
const FooterContainer = styled.div`
    height: 40vh;
    display: grid;
    justify-items: center;
    align-items: center;
    background: rgba(0,0,0,0);
  `

const Hamburger = styled(Icon)`
  position: fixed;
  top: 1.25rem;
  right: 4rem;
  z-index: 100;
  cursor: pointer;
  color: white;
  text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey;
  visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`


function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const homeRef = useRef(null)
  const newsRef = useRef(null)
  const showsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const videoRef = useRef(null)


  return <>
    <Hamburger visible={!sideBarOpen} name="bars" size="big" onClick={() => setSideBarOpen(!sideBarOpen)} />

    <Sidebar
      style={{ background: 'rgba(0,0,0,0.6)' }}
      as={Menu}
      inverted
      animation='push'
      icon='labeled'
      onHide={() => setSideBarOpen(false)}
      vertical
      visible={sideBarOpen}
      width='thin'
      direction='right'
    >
      <Menu.Item
        inverted
        onClick={() => setSideBarOpen(false)}
        icon="delete"

      />
      <Menu.Item
        inverted
        onClick={() => window.scroll({ top: homeRef.current.offsetTop, behavior: 'smooth' })}
        content="Top"
      />
      <Menu.Item
        onClick={() => window.scroll({ top: newsRef.current.offsetTop, behavior: 'smooth' })}
        content="News"
      />
      <Menu.Item
        onClick={() => window.scroll({ top: showsRef.current.offsetTop, behavior: 'smooth' })}
        content="Shows"
      />
      <Menu.Item
        onClick={() => window.scroll({ top: aboutRef.current.offsetTop, behavior: 'smooth' })}
        content="About"
      />
      <Menu.Item
        onClick={() => window.scroll({ top: videoRef.current.offsetTop, behavior: 'smooth' })}
        content="Video"
      />
      <Menu.Item
        onClick={() => window.scroll({ top: contactRef.current.offsetTop, behavior: 'smooth' })}
        content="Contact"
      />
      <Menu.Item
        icon="facebook"
        target="blank"
        href="https://www.facebook.com/antipodesband/?fb_dtsg_ag=Adw5g7msJNoX3LaLV7T35nWqHQ-FZgul5B7ZDIfJHDTzEw%3AAdw0kEJJHTH0TeT6Wxu-3AdcNCFLkp8vdmt68OE7o03JOA"
      />
      <Menu.Item href="https://rattle-records.bandcamp.com/album/good-winter"
        icon="bandcamp"
        target="blank"
      />
      <Menu.Item href="https://www.youtube.com/channel/UCprU4MaJyO_JH8Sc6OS5LXA" icon="youtube" target="blank" />
    </Sidebar>



    {/* Home */}
    <div ref={homeRef} className="banner">
      <div className="banner-text-container">
        <h1>Antipodes</h1>
      </div>
    </div>

    {/* News Section */}
    <RefDivider ref={newsRef} />
    <NewsContainer />


    {/* Events */}
    <RefDivider ref={showsRef} />
    <BandsInTown />


    {/* Bio */}
    <RefDivider ref={aboutRef} />
    <Bio />


    {/* Video */}
    <RefDivider ref={videoRef} />
    <Video />

    <Divider hidden />
    <Divider />

    {/* Contact */}
    <RefDivider ref={contactRef} />
    <Contact />


    <FooterContainer>
      <p>
        <Icon name="copyright" />
        Antipodes {new Date().getFullYear()}
      </p>
    </FooterContainer>


  </>
}

export default App;
