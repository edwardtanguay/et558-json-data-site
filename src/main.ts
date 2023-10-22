import './style.css';
import employees from './data/employees.json';

employees.sort((a, b) => a.lastName > b.lastName ? 1 : -1);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Employees</h1>
<p>There are ${employees.length} employees.</p>
<ul>
	${employees.map(employee => {
		return /*html*/ `
			<li>${employee.firstName} <strong>${employee.lastName}</strong> - ${employee.address.city}</li>	
		`
	}).join('')}
</ul>
`;