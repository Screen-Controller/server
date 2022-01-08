import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer'
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  SideNav,
  SideNavItems
} from 'carbon-components-react/lib/components/UIShell'
import { BareMetalServer32, Screen32, ContentView32 } from '@carbon/icons-react'

import NavLink from './components/NavLink.jsx'
import NavGroup from './components/NavGroup.jsx'


const Index = () => (
  <div className="container bx--theme--g100">
    <Router>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Skeleton">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="/" prefix=''>
                Skeleton
              </HeaderName>
              <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                <SideNavItems>
                  <NavGroup icon={BareMetalServer32} label="Server" grouppath="/server">
                    <NavLink to="/server" label="Home"/>
                    <NavLink to="/server/configuration" label="Configuration"/>
                  </NavGroup>
                  <NavGroup icon={Screen32} label="Screens" grouppath="/boards">
                    <NavLink to="/boards" label="Home"/>
                    <NavLink to="/boards/output" label="Content"/>
                    <NavLink to="/boards/configuration" label="Configuration"/>
                  </NavGroup>
                  <NavGroup icon={ContentView32} label="Content" grouppath="/content">
                    <NavLink to="/content" label="Home"/>
                     <NavLink to="/content/playlists" label="Playlists"/>
                    <NavLink to="/content/text" label="HTML"/>
                    <NavLink to="/content/upload" label="Upload"/>
                  </NavGroup>
                </SideNavItems>
              </SideNav>
            </Header>
            <Switch>
              <Content id="main-content">
                <div className="bx--grid">
                  <div className="bx--row">
                    <section className="bx--offset-lg-2 bx--col-lg-10">
                      {/* MONITOR */}
                      <Route exact path="/monitor">
                        
                      </Route>
                      <Route path="/monitor/status">
                        
                      </Route>
                      {/* ROOT */}
                      <Route exact path="/">
                        
                      </Route>
                    </section>
                  </div>
                </div>
              </Content>
            </Switch>
          </>
        )}
      />
    </Router>
  </div>
)

export default Index
