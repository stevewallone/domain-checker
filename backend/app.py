from flask import Flask, request, jsonify
from flask_cors import CORS
import whois

app = Flask(__name__)
CORS(app)

@app.route('/api/check', methods=['POST'])
def check_domains():
    data = request.get_json()
    domain_name = data.get('domain_name')
    tlds = data.get('tlds')
    results = {}

    if not domain_name or not tlds:
        return jsonify({'error': 'Domain name and TLDs are required.'}), 400

    for tld in tlds:
        domain = f"{domain_name}.{tld}"
        try:
            w = whois.whois(domain)
            if w.status == 'available' or w.registrar is None:
                results[domain] = 'Available'
            else:
                results[domain] = 'Taken'
        except Exception as e:
            results[domain] = 'Error'

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
