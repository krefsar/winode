import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import Theme from '../constants/theme';

import '../styles/HomeDashBoard.css';

import { LOG_OUTPUT } from '../constants';

import Title from './Title';
import Text from './Text';
import TerminalText from './TerminalText';
import RedditWidget from './RedditWidget';
import DashboardCharts from './DashboardCharts';
import StatusWidget from './StatusWidget';

const OtherDashBoardThing = () => {
	return(
		<div className='OtherDashBoardThing'>
			<svg width="140px" height="136px" viewBox="0 0 140 136" version="1.1" xmlns="http://www.w3.org/2000/svg" >
			    <g id="UX" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <g id="Home-Dashboard" transform="translate(-995.000000, -495.000000)" fill="#00D1B2">
			            <polygon id="Rectangle" points="1065 563 1135 495 1135 631 995 631"></polygon>
			        </g>
			    </g>
			</svg>
		</div>
	)
}
const DashBoardThing = () => {
	return (
		<div className='DashBoardThing'>
			<svg width="177px" height="116px" viewBox="0 0 177 116" version="1.1" xmlns="http://www.w3.org/2000/svg" >
			    <g id="UX" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <g id="Home-Dashboard" transform="translate(0.000000, -65.000000)" fill="#00D1B2">
			            <polygon id="Rectangle" points="0 65 177 65 88.5 123 0 181"></polygon>
			        </g>
			    </g>
			</svg>
		</div>
	)
}




const DashBoardWrapper = (props) => {
	return (
		<div className='DashBoardWrapper'>
			{props.children}
		</div>
	)
}
const WidgetWrapper = (props) => {
	return (
		<div className='WidgetWrapper'>
			{
				props.title ?
					<div className='WidgetWrapperTitle'>
						<Title  subtitle>{props.title}</Title>
					</div>
				:
					null
			}
			{props.children}
		</div>
	)
}

const TerminalOutputWidget = (props) => {

	function renderOutputLogs() {
		return LOG_OUTPUT.map((d,i) => {
			return <TerminalText terminal key={'ter-text-' + i}>{d}</TerminalText>
		})
	}
	return (
		<div className='TerminalOutputWidget'>
			<div className='con'>
				{
					renderOutputLogs()
				}
			</div>
		</div>
	)
}

const SplitWidgetColumn = (props) => {
	return (
		<div className={'SplitWidgetColumn ' +  (props.className ? props.className : '') }>
			{props.children}
		</div>
	)
}
const SplitWidgetRow = (props) => {
	console.log('SplitWidgetRow', props)
	console.log(props.className ? props.className : 'fackshit')
	return (
		<div className={'SplitWidgetRow ' + (props.className ? props.className : '')}>
			{props.children}
		</div>
	)
}

const TerminalWidget = (props) => {
	return (
		<div className='TerminalWidget'>
			<TerminalText bold>WiNode</TerminalText>
		</div>
	)
}

const ActivityWidget = (props) => {
	return (
		<div className='ActivityWidget'>

		</div>
	)
}
export default class HomeDashboard extends Component {
	render() {
	    
	      return (  
	      		<ThemeProvider theme={Theme.light}>
			     	<div className='HomeDashboard'>
			     		<DashBoardThing />
			     		<OtherDashBoardThing />
			     		<DashBoardWrapper>
			     			<WidgetWrapper
			     				title={'Node Console'}
			     			>
			     				<TerminalOutputWidget />
			     			</WidgetWrapper>
			     			<SplitWidgetColumn>
			     				<WidgetWrapper
			     					title={'Price Chart'}
			     				>
			     					<DashboardCharts />
			     				</WidgetWrapper>
			     				<SplitWidgetRow>
			     					<WidgetWrapper
			     						title={'Activity'}
			     					>
			     						<ActivityWidget />
			     					</WidgetWrapper>
			     					<WidgetWrapper
			     						title={'Terminal'}
			     					>
			     						<TerminalWidget />
			     					</WidgetWrapper>
			     				</SplitWidgetRow>
			     			</SplitWidgetColumn>
			     			<WidgetWrapper
			     				title={'Reddit Stream'}
			     			>
			     				<RedditWidget />
			     			</WidgetWrapper>
			     			<SplitWidgetColumn
			     				className='statsWrapperr'
			     			>
			     				<WidgetWrapper
			     					title={'Stats'}
			     				>
			     					<StatusWidget />
			     				</WidgetWrapper>
			     				<WidgetWrapper

			     				>
			     					<Text>testing</Text>
			     				</WidgetWrapper>
			     			</SplitWidgetColumn>
			     		</DashBoardWrapper>
			     	</div>
		     	</ThemeProvider>
	    );
	}
}