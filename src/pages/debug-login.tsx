import React, { useState } from 'react';

const DebugLoginPage = () => {
  const [debugInfo, setDebugInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const testGraphQLEndpoint = async () => {
    setLoading(true);
    const graphqlUrl = 'https://api.myrenewme.com/graphql';
    
    let info = `Testing GraphQL Endpoint: ${graphqlUrl}\n`;
    info += `Timestamp: ${new Date().toISOString()}\n`;
    info += '=' + '='.repeat(50) + '\n\n';
    
    try {
      // Test 1: Basic connectivity with introspection query
      info += '1. Testing basic connectivity...\n';
      const introspectionResponse = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query IntrospectionQuery {
              __schema {
                queryType {
                  name
                }
                mutationType {
                  name
                }
              }
            }
          `
        })
      });
      
      info += `   Status: ${introspectionResponse.status} ${introspectionResponse.statusText}\n`;
      
      if (introspectionResponse.ok) {
        const introspectionData = await introspectionResponse.json();
        info += `   Introspection successful: ${JSON.stringify(introspectionData, null, 2)}\n\n`;
      } else {
        const errorText = await introspectionResponse.text();
        info += `   Introspection failed: ${errorText}\n\n`;
      }

      // Test 2: Test the actual signIn mutation
      info += '2. Testing signIn mutation...\n';
      const loginResponse = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
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
                }
              }
            }
          `,
          variables: {
            email: 'admin@admin.com',
            password: 'admin@admin.com'
          }
        })
      });
      
      info += `   Login Status: ${loginResponse.status} ${loginResponse.statusText}\n`;
      
      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        info += `   Login Response: ${JSON.stringify(loginData, null, 2)}\n`;
        
        // Check for specific error patterns
        if (loginData.errors) {
          info += `   GraphQL Errors Found: ${JSON.stringify(loginData.errors, null, 2)}\n`;
        }
        
        if (loginData.data && loginData.data.signIn) {
          if (loginData.data.signIn.errors) {
            info += `   SignIn Errors: ${loginData.data.signIn.errors}\n`;
          }
          if (loginData.data.signIn.user) {
            info += `   User Found: ${loginData.data.signIn.user.email}\n`;
            info += `   Auth Token Present: ${!!loginData.data.signIn.user.authToken}\n`;
          } else {
            info += `   No user data returned\n`;
          }
        }
      } else {
        const errorText = await loginResponse.text();
        info += `   Login Error Response: ${errorText}\n`;
      }

      // Test 3: Test without credentials
      info += '\n3. Testing without credentials...\n';
      const noCorsResponse = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // No credentials: 'include'
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
                }
              }
            }
          `,
          variables: {
            email: 'admin@admin.com',
            password: 'admin@admin.com'
          }
        })
      });
      
      info += `   No-Credentials Status: ${noCorsResponse.status}\n`;
      if (noCorsResponse.ok) {
        const noCorsData = await noCorsResponse.json();
        info += `   No-Credentials Response: ${JSON.stringify(noCorsData, null, 2)}\n`;
      }

    } catch (error: any) {
      info += `\nFATAL ERROR: ${error.message}\n`;
      info += `Error Stack: ${error.stack}\n`;
    }
    
    setDebugInfo(info);
    setLoading(false);
  };

  const testWithCurrentCode = async () => {
    setLoading(true);
    let info = 'Testing with your current auth service...\n';
    info += '=' + '='.repeat(40) + '\n\n';
    
    try {
      // Import and test your auth service
      const { signInUser } = await import('../services/auth-service');
      
      const result = await signInUser({
        email: 'admin@admin.com',
        password: 'admin@admin.com'
      });
      
      info += `Auth Service Result: ${JSON.stringify(result, null, 2)}\n`;
      
    } catch (error: any) {
      info += `Auth Service Error: ${error.message}\n`;
      info += `Error Stack: ${error.stack}\n`;
    }
    
    setDebugInfo(info);
    setLoading(false);
  };

  const clearDebug = () => {
    setDebugInfo('');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">RenewMe Login Debug Tool</h1>
        
        <div className="bg-white p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold mb-3">Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>GraphQL URL:</strong>
              <code className="block bg-gray-100 p-2 rounded mt-1">
                {process.env.NEXT_PUBLIC_GRAPHQL_URL || 'Not defined'}
              </code>
            </div>
            <div>
              <strong>Test Credentials:</strong>
              <code className="block bg-gray-100 p-2 rounded mt-1">
                Email: admin@admin.com<br/>
                Password: admin@admin.com
              </code>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <button 
            onClick={testGraphQLEndpoint}
            disabled={loading}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed mr-4"
          >
            {loading ? 'Testing...' : 'Test GraphQL Endpoint'}
          </button>
          
          <button 
            onClick={testWithCurrentCode}
            disabled={loading}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed mr-4"
          >
            {loading ? 'Testing...' : 'Test Auth Service'}
          </button>

          <button 
            onClick={clearDebug}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Clear Output
          </button>
        </div>
        
        {debugInfo && (
          <div className="bg-black text-green-400 p-4 rounded-lg overflow-auto">
            <pre className="text-xs whitespace-pre-wrap font-mono">
              {debugInfo}
            </pre>
          </div>
        )}

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Running tests...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebugLoginPage;
