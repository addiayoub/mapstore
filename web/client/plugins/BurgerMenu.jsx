import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import assign from 'object-assign';
import { DropdownButton, Glyphicon, MenuItem } from 'react-bootstrap';
import Automate from "./Automate.jsx";
import tooltip from "../components/misc/enhancers/tooltip";
import ToolsContainer from './containers/ToolsContainer';
import Message from './locale/Message';
import { createPlugin } from '../utils/PluginsUtils';
import {setControlProperty} from "../actions/controls";
import {burgerMenuSelector} from "../selectors/controls";

import './burgermenu/burgermenu.css';

const TDropdownButton = tooltip(DropdownButton);
const Container = ({children, ...props}) => (
    <TDropdownButton
        noCaret
        pullRight
        bsStyle="primary"
        title={<Glyphicon glyph="menu-hamburger"/>}
        tooltipId="options"
        tooltipPosition="bottom"
        {...props}
    >
        {children}
    </TDropdownButton>
);

const InnerContainer = ({children, ...props}) => (
    <div {...props}>
        {children}
    </div>
);

const AnchorElement = ({children, href, target, onClick}) => (
    <a href={href} target={target} onClick={onClick}>{children}</a>
);

class BurgerMenu extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        dispatch: PropTypes.func,
        items: PropTypes.array,
        title: PropTypes.node,
        onItemClick: PropTypes.func,
        onInit: PropTypes.func,
        onDetach: PropTypes.func,
        controls: PropTypes.object,
        panelStyle: PropTypes.object,
        panelClassName: PropTypes.string
    };

    static contextTypes = {
        messages: PropTypes.object,
        router: PropTypes.object
    };

    static defaultProps = {
        id: "mapstore-burger-menu",
        items: [],
        onItemClick: () => {},
        title: <MenuItem header><Message msgId="options"/></MenuItem>,
        controls: [],
        panelStyle: {
            minWidth: "300px",
            zIndex: 100,
            position: "absolute",
            overflow: "auto"
        },
        panelClassName: "toolbar-panel",
        onInit: () => {},
        onDetach: () => {}
    };

    state = {
        showAutomate: false
    };

    componentDidMount() {
        const { onInit } = this.props;
        onInit();
    }

    componentDidUpdate(prevProps) {
        const { onInit } = this.props;
        prevProps.isActive === false && onInit();
    }

    componentWillUnmount() {
        const { onDetach } = this.props;
        onDetach();
    }

    getPanels = items => {
        return items.filter((item) => item.panel)
            .map((item) => assign({}, item, {panel: item.panel === true ? item.plugin : item.panel})).concat(
                items.filter((item) => item.tools).reduce((previous, current) => {
                    return previous.concat(
                        current.tools.map((tool, index) => ({
                            name: current.name + index,
                            panel: tool,
                            cfg: current.cfg.toolsCfg ? current.cfg.toolsCfg[index] : {}
                        }))
                    );
                }, [])
            );
    };

    getTools = () => {
        const processChildren = (children = []) => {
            const childTools = children.map(child => ({
                ...child,
                ...processChildren(child.children)
            })).sort((a, b) => a.position - b.position);
            const innerProps = {
                container: InnerContainer,
                containerWrapperStyle: {position: 'static'},
                className: 'burger-menu-submenu',
                toolStyle: 'primary',
                activeStyle: 'default',
                stateSelector: 'burgermenu',
                eventSelector: 'onSelect',
                tool: MenuItem,
                panelStyle: this.props.panelStyle,
                panelClassName: this.props.panelClassName
            };
            return children.length > 0 ? {
                containerWrapperStyle: {position: 'static'},
                style: {position: 'relative'},
                childTools,
                childPanels: this.getPanels(children),
                innerProps
            } : {};
        };

        return [
            {
                element:
                    <span key="burger-menu-title">
                        {this.props.title}
                    </span>
            },
            {
                element:
                    <MenuItem key="automate-button" onClick={() => this.setState({ showAutomate: true })}>
                        <Glyphicon glyph="cog" /> Automate
                    </MenuItem>,
                position: 1
            },
            ...this.props.items.map(item => ({
                ...item,
                ...processChildren(item.children)
            })).sort((a, b) => a.position - b.position)
        ];
    };

    render() {
        return (
            <>
                <ToolsContainer id={this.props.id} className="square-button"
                    container={Container}
                    toolStyle="primary"
                    activeStyle="default"
                    stateSelector="burgermenu"
                    eventSelector="onSelect"
                    tool={({ children: c, ...props }) => <MenuItem componentClass={AnchorElement} {...props} >{c}</MenuItem>}
                    tools={this.getTools()}
                    panels={this.getPanels(this.props.items)}
                    panelStyle={this.props.panelStyle}
                    panelClassName={this.props.panelClassName}
                />
                {this.state.showAutomate && (
                    <>
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 999
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: '150px',
                            right: '350px',
                            background: 'white',
                            padding: '15px',
                            border: '1px solid black',
                            borderRadius: '10px',
                            boxShadow: '0 30px 50px rgba(0,0,0,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            whiteSpace: "nowrap",
                            animation: "fadeIn 0.9s",
                            zIndex: 1000
                        }}>
                            <span><Automate/></span>
                            <Glyphicon
                                glyph="remove"
                                onClick={() => this.setState({ showAutomate: false })}
                                className="butt"
                            />
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default createPlugin(
    'BurgerMenu',
    {
        component: connect((state) =>({
            controls: state.controls,
            active: burgerMenuSelector(state)
        }), {
            onInit: setControlProperty.bind(null, 'burgermenu', 'enabled', true),
            onDetach: setControlProperty.bind(null, 'burgermenu', 'enabled', false)
        })(BurgerMenu),
        containers: {
            OmniBar: {
                name: "burgermenu",
                position: 2,
                tool: true,
                priority: 1
            }
        }
    }
);