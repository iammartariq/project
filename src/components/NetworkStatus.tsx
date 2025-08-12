import React, { useState, useEffect } from 'react';

const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [connectionTest, setConnectionTest] = useState<'testing' | 'success' | 'failed' | null>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Test GraphQL endpoint connectivity
    testConnection();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const testConnection = async () => {
    setConnectionTest('testing');
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://api.myrenewme.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query { __typename }`
        })
      });
      
      if (response.ok) {
        setConnectionTest('success');
      } else {
        setConnectionTest('failed');
      }
    } catch (error) {
      setConnectionTest('failed');
    }
  };

  if (!isOnline) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-2 text-center z-50">
        ❌ No internet connection
      </div>
    );
  }

  if (connectionTest === 'failed') {
    return (
      <div className="fixed top-0 left-0 right-0 bg-orange-500 text-white p-2 text-center z-50">
        ⚠️ Server connection issues - some features may not work
        <button 
          onClick={testConnection}
          className="ml-2 underline hover:no-underline"
        >
          Retry
        </button>
      </div>
    );
  }

  return null;
};

export default NetworkStatus;