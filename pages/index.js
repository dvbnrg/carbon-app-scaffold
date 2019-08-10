import '../styles.scss'
import Header from "carbon-components-react/lib/components/UIShell/Header";
import HeaderMenuButton from "carbon-components-react/lib/components/UIShell/HeaderMenuButton";
import HeaderName from "carbon-components-react/lib/components/UIShell/HeaderName";
import HeaderNavigation from "carbon-components-react/lib/components/UIShell/HeaderNavigation";
import HeaderMenuItem from "carbon-components-react/lib/components/UIShell/HeaderMenuItem";
import HeaderMenu from "carbon-components-react/lib/components/UIShell/HeaderMenu";
import HeaderGlobalBar from "carbon-components-react/lib/components/UIShell/HeaderGlobalBar";
import HeaderGlobalAction from "carbon-components-react/lib/components/UIShell/HeaderGlobalAction";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";

class App extends React.Component {
    onClick(){
        console.log('clicked button!')
    }

    render() {
        return (
            <Header>
                <HeaderMenuButton aria-label="Open menu" onClick={() => {this.onClick()}} />
                    <HeaderName prefix="" href="#">
                        My Carbon App
                    </HeaderName>
                <HeaderNavigation aria-label="My Carbon App">
                    <HeaderMenuItem href="#">
                        Link 1
                    </HeaderMenuItem>
                    <HeaderMenuItem href="#">
                        Link 2
                    </HeaderMenuItem>
                    <HeaderMenuItem href="#">
                        Link 3
                    </HeaderMenuItem>
                    <HeaderMenu menuLinkName="Link 4" aria-label="Link 4">
                        <HeaderMenuItem href="#">
                            Sub-link 1
                        </HeaderMenuItem>
                        <HeaderMenuItem href="#">
                            Sub-link 2
                        </HeaderMenuItem>
                        <HeaderMenuItem href="#">
                            Sub-link 3
                        </HeaderMenuItem>
                    </HeaderMenu>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Search" onClick={() => {this.onClick()}}>
                        <Search20/>
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="Notifications" onClick={() => {this.onClick()}}>
                        <Notification20/>
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="App Switcher" onClick={() => {this.onClick()}}>
                        <AppSwitcher20/>
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        );
    }
}

export default App;