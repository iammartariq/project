import React, { useState } from 'react';
import { signInUser } from '@/services/auth-service';

const DebugAuthPage = () => {
  const [debugInfo, setDebugInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [testCredentials, setTestCredentials] = useState({
    email: 'admin@admin.com',
    password: 'admin@admin.com'
  });

  const testDirectGraphQL = async () => {
    setLoading(true);
    const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://api.myrenewme.com/graphql';
    
    let info = `=== DIRECT GRAPHQL TEST ===\n`;
    info += `URL: ${graphqlUrl}\n`;
    info += `Timestamp: ${new Date().toISOString()}\n\n`;
    
    try {
      // Test 1: Basic connectivity
      info += '1. Testing basic connectivity...\n';
      const response = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              __schema {
                queryType {
                  name
                }
              }
            }
          `
        })
      });
      
      info += `   Status: ${response.status} ${response.statusText}\n`;
      
      if (response.ok) {
        const data = await response.json();
        info += `   ✅ Server is responding\n`;
        info += `   Schema available: ${!!data.data?.__schema}\n\n`;
      } else {
        const errorText = await response.text();
        info += `   ❌ Server error: ${errorText}\n\n`;
      }

      // Test 2: Login mutation
      info += '2. Testing login mutation...\n';
      const loginResponse = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation signIn($email: String!, $password: String!) {
              signIn(email: $email, password: $password) {
                errors
                user {
                  id
                  email
                  fullName
                  authToken
                  subscriptionStatus
                }
              }
            }
          `,
          variables: testCredentials
        })
      });
      
      info += `   Login Status: ${loginResponse.status}\n`;
      
      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        info += `   Response: ${JSON.stringify(loginData, null, 2)}\n`;
        
        if (loginData.errors) {
          info += `   ❌ GraphQL Errors: ${JSON.stringify(loginData.errors)}\n`;
        }
        
        if (loginData.data?.signIn) {
          if (loginData.data.signIn.errors) {
            info += `   ❌ Login Errors: ${loginData.data.signIn.errors}\n`;
          }
          if (loginData.data.signIn.user) {
            info += `   ✅ Login successful!\n`;
            info += `   User ID: ${loginData.data.signIn.user.id}\n`;
            info += `   Email: ${loginData.data.signIn.user.email}\n`;
            info += `   Has Token: ${!!loginData.data.signIn.user.authToken}\n`;
          } else {
            info += `   ❌ No user data returned\n`;
          }
        }
      } else {
        const errorText = await loginResponse.text();
        info += `   ❌ HTTP Error: ${errorText}\n`;
      }

    } catch (error: any) {
      info += `\n❌ FATAL ERROR: ${error.message}\n`;
      info += `Stack: ${error.stack}\n`;
    }
    
    setDebugInfo(info);
    setLoading(false);
  };

  const testAuthService = async () => {
    setLoading(true);
    let info = '=== AUTH SERVICE TEST ===\n';
    info += `Timestamp: ${new Date().toISOString()}\n\n`;
    
    try {
      info += 'Testing signInUser function...\n';
      const result = await signInUser(testCredentials);
      
      info += `Result: ${JSON.stringify(result, null, 2)}\n`;
      
      if (result.errors) {
        info += `❌ Auth Service Errors: ${result.errors}\n`;
      }
      
      if (result.user) {
        info += `✅ Auth Service Success!\n`;
        info += `User: ${result.user.email}\n`;
        info += `Token: ${result.user.authToken ? 'Present' : 'Missing'}\n`;
      }
      
    } catch (error: any) {
      info += `❌ Auth Service Error: ${error.message}\n`;
      info += `Stack: ${error.stack}\n`;
    }
    
    setDebugInfo(info);
    setLoading(false);
  };

  const testEnvironment = () => {
    let info = '=== ENVIRONMENT TEST ===\n';
    info += `NEXT_PUBLIC_GRAPHQL_URL: ${process.env.NEXT_PUBLIC_GRAPHQL_URL || 'NOT SET'}\n`;
    info += `STRIPE_PUBLISHABLE_KEY: ${process.env.STRIPE_PUBLISHABLE_KEY ? 'SET' : 'NOT SET'}\n`;
    info += `MONTHLY_PLAN: ${process.env.MONTHLY_MEDITATION_PLAN || 'NOT SET'}\n`;
    info += `YEARLY_PLAN: ${process.env.YEARLY_MEDITATION_PLAN || 'NOT SET'}\n`;
    info += `\nBrowser localStorage authToken: ${localStorage.getItem('authToken') || 'NOT SET'}\n`;
    
    setDebugInfo(info);
  };

  const clearStorage = () => {
    localStorage.clear();
    setDebugInfo('✅ Local storage cleared');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">RenewMe Authentication Debug</h1>
        
        <div className="bg-white p-6 rounded-lg mb-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Test Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email:</label>
              <input
                type="email"
                value={testCredentials.email}
                onChange={(e) => setTestCredentials({...testCredentials, email: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password:</label>
              <input
                type="password"
                value={testCredentials.password}
                onChange={(e) => setTestCredentials({...testCredentials, password: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <button 
            onClick={testEnvironment}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-4"
          >
            Check Environment
          </button>
          
          <button 
            onClick={testDirectGraphQL}
            disabled={loading}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 mr-4"
          >
            {loading ? 'Testing...' : 'Test Direct GraphQL'}
          </button>
          
          <button 
            onClick={testAuthService}
            disabled={loading}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 mr-4"
          >
            {loading ? 'Testing...' : 'Test Auth Service'}
          </button>

          <button 
            onClick={clearStorage}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 mr-4"
          >
            Clear Storage
          </button>

          <button 
            onClick={() => setDebugInfo('')}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Clear Output
          </button>
        </div>
        
        {debugInfo && (
          <div className="bg-black text-green-400 p-4 rounded-lg overflow-auto">
            <pre className="text-sm whitespace-pre-wrap font-mono">
              {debugInfo}
            </pre>
          </div>
        )}

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Running authentication tests...</p>
          </div>
        )}

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">Common Issues & Solutions:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Complete your STRIPE_SECRET_KEY in .env file</li>
            <li>• Ensure the GraphQL endpoint is accessible</li>
            <li>• Check if admin@admin.com user exists in the database</li>
            <li>• Verify CORS settings on the API server</li>
            <li>• Restart the development server after env changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DebugAuthPage;