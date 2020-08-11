import "@servicenow/now-template-card";
import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div className="container">
			<div className="cards1">
				<now-template-card-assist
					tagline={{icon: "tree-view-long-outline", label: 'Incident'}}
					actions={[
					{id: 'share', label: 'Copy URL'},
					{id: 'close', label: 'Mark Complete'}
					]}
					heading={{label: "My PDF docs are all locked from editing"}}
					content={[
					{label: 'Number', value: {type: 'string', value: 'INC0000038'}},
					{label: 'State', value: {type: 'string', value: 'Closed'}},
					{label: 'Assignment Group', value: {type: 'string', value: 'Service Desk'}},
					{label: 'Assigned To', value: {type: 'string', value: 'Luke Wilson'}},				
					]}
					footer-content={{
					label: 'Updated',
					value: '2020-05-08 17:36:44'
					}}
				/>
				<now-template-card-assist
					tagline={{icon: "tree-view-long-outline", label: 'Incident'}}
					actions={[
					{id: 'share', label: 'Copy URL'},
					{id: 'close', label: 'Mark Complete'}
					]}
					heading={{label: "Printer in my office is out of toner"}}
					content={[
					{label: 'Number', value: {type: 'string', value: 'INC0000008'}},
					{label: 'State', value: {type: 'string', value: 'Closed'}},
					{label: 'Assignment Group', value: {type: 'string', value: 'Hardware'}},
					{label: 'Assigned To', value: {type: 'string', value: 'ITIL User'}},				
					]}
					footer-content={{
					label: 'Updated',
					value: '2020-05-09 16:08:39'
					}}
				/>
				
			</div>
			<div className="cards2">
				<now-template-card-assist
					tagline={{icon: "tree-view-long-outline", label: 'Incident'}}
					actions={[
					{id: 'share', label: 'Copy URL'},
					{id: 'close', label: 'Mark Complete'}
					]}
					heading={{label: "Hangs when trying to print VISIO document"}}
					content={[
					{label: 'Number', value: {type: 'string', value: 'INC0000006'}},
					{label: 'State', value: {type: 'string', value: 'Closed'}},
					{label: 'Assignment Group', value: {type: 'string', value: 'Software'}},
					{label: 'Assigned To', value: {type: 'string', value: 'Howard Johnson'}},				
					]}
					footer-content={{
					label: 'Updated',
					value: '2020-05-01 16:08:05'
					}}
				/>
				<now-template-card-assist
					tagline={{icon: "tree-view-long-outline", label: 'Incident'}}
					actions={[
					{id: 'share', label: 'Copy URL'},
					{id: 'close', label: 'Mark Complete'}
					]}
					heading={{label: "Can`t read email"}}
					content={[
					{label: 'Number', value: {type: 'string', value: 'INC0000001'}},
					{label: 'State', value: {type: 'string', value: 'Closed'}},
					{label: 'Assignment Group', value: {type: 'string', value: 'Service Desk'}},
					{label: 'Assigned To', value: {type: 'string', value: 'Charlie Whitherspoon'}},				
					]}
					footer-content={{
					label: 'Updated',
					value: '2020-05-01 16:09:51'
					}}
				/>
			</div>
			
   		</div>
		
	);
};

createCustomElement('x-524540-card-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
