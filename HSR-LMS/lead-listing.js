// Sample lead data
const leads = [
    { id: 1, name: 'John Doe', contact: '1234567890', status: 'New', source: 'Google' },
    { id: 2, name: 'Jane Smith', contact: '0987654321', status: 'Contacted', source: 'Facebook' },
    { id: 3, name: 'Mike Johnson', contact: '1122334455', status: 'Not Interested', source: 'Twitter' },
    { id: 4, name: 'Emily Davis', contact: '2233445566', status: 'New', source: 'Google' }
];

// Function to render leads in the table
function renderLeads(filteredLeads) {
    const tableBody = document.getElementById('lead-table-body');
    tableBody.innerHTML = '';
    filteredLeads.forEach(lead => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lead.id}</td>
            <td>${lead.name}</td>
            <td>${lead.contact}</td>
            <td>${lead.status}</td>
            <td>${lead.source}</td>
            <td>
                <button onclick="viewLead(${lead.id})">View</button>
                <button onclick="editLead(${lead.id})">Edit</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Filter leads based on status and source
function filterLeads() {
    const statusFilter = document.getElementById('filter-status').value;
    const sourceFilter = document.getElementById('filter-source').value.toLowerCase();
    const filteredLeads = leads.filter(lead => {
        return (
            (statusFilter === '' || lead.status === statusFilter) &&
            (sourceFilter === '' || lead.source.toLowerCase().includes(sourceFilter))
        );
    });
    renderLeads(filteredLeads);
}

// Apply filters
document.getElementById('apply-filter').addEventListener('click', filterLeads);

// Initial render of all leads
renderLeads(leads);

// Handle add lead form submission
document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newLead = {
        id: leads.length + 1,
        name: document.getElementById('lead-name').value,
        contact: document.getElementById('lead-contact').value,
        status: document.getElementById('lead-status').value,
        source: document.getElementById('lead-source').value
    };
    leads.push(newLead);
    renderLeads(leads);
    event.target.reset();
});
