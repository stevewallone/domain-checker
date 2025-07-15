document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('check-button');
    const domainNameInput = document.getElementById('domain-name');
    const resultsDiv = document.getElementById('results');

    checkButton.addEventListener('click', async () => {
        const domainName = domainNameInput.value.trim();
        const selectedTlds = [...document.querySelectorAll('input[name="tld"]:checked')].map(el => el.value);

        if (!domainName) {
            alert('Please enter a domain name.');
            return;
        }

        if (selectedTlds.length === 0) {
            alert('Please select at least one TLD.');
            return;
        }

        resultsDiv.innerHTML = 'Checking...';

        try {
            const response = await fetch('http://127.0.0.1:5000/api/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    domain_name: domainName, 
                    tlds: selectedTlds 
                }),
            });

            const results = await response.json();
            displayResults(results);
        } catch (error) {
            resultsDiv.innerHTML = '<div class="result-item">Could not connect to the server. Is it running?</div>';
            console.error('Error:', error);
        }
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '';
        for (const domain in results) {
            const status = results[domain];
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            const domainSpan = document.createElement('span');
            domainSpan.textContent = domain;

            const statusSpan = document.createElement('span');
            statusSpan.textContent = status;
            statusSpan.className = `status ${status.toLowerCase()}`;

            resultItem.appendChild(domainSpan);
            resultItem.appendChild(statusSpan);
            resultsDiv.appendChild(resultItem);
        }
    }
});
