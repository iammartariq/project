import React, { useState } from 'react';

const ConnectionTester: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [testing, setTesting] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    setTestResult('Testing connection...');
    
    const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://api.myrenewme.com/graphql';
    
    try {
      // Test 1: Basic fetch
      const response = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query { __typename }`
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        setTestResult(`✅ Connection successful!\nStatus: ${response.status}\nResponse: ${JSON.stringify(data, null, 2)}`);
      } else {
        setTestResult(`❌ Connection failed!\nStatus: ${response.status} ${response.statusText}`);
      }
    } catch (error: any) {
      setTestResult(`❌ Connection error: ${error.message}`);
    }
    
    setTesting(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-md">
      <h3 className="font-semibold mb-2">Connection Tester</h3>
      <button
        onClick={testConnection}
        disabled={testing}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 mb-2"
      >
        {testing ? 'Testing...' : 'Test GraphQL Connection'}
      </button>
      {testResult && (
        <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
          {testResult}
        </pre>
      )}
    </div>
  );
};

export default ConnectionTester;