import './style.css';
import employees from './data/employees.json';

employees.sort((a, b) => a.lastName > b.lastName ? 1 : -1);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Employees</h1>
<p>There are ${employees.length} employees.</p>
<ul>
	${employees.map(employee => {
	return /*html*/ `
			<li>${employee.firstName} <strong>${employee.lastName}</strong> - ${employee.address.city}
			<ul>
				<li>reports to: <span class="reportsTo">${getManagerName(Number(employee.reportsTo))}</span></li>
			</ul>
			</li>
		`
}).join('')}
</ul>
`;

function getManagerName(reportsTo: number) {
	if (isNaN(reportsTo)) {
		return 'nobody';
	} else {
		const employee = employees.find(m => m.employeeID === reportsTo);
		if (employee) {
			return employee.firstName + ' ' + employee.lastName;
		} else {
			return `(error: employee #${reportsTo} does not exist)`;
		}
	}
}
