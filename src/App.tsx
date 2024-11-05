import React from 'react';
import { Settings, Bell, User } from 'lucide-react';

function App() {
  return (
    <div className="w-[350px] h-[500px] bg-white">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Chrome Extension</h1>
          <Settings className="w-5 h-5 cursor-pointer hover:rotate-90 transition-transform" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* User Section */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gray-100 p-2 rounded-full">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h2 className="font-semibold">Welcome Back</h2>
            <p className="text-sm text-gray-600">Ready to enhance your browsing?</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <span className="text-indigo-600 font-medium">Quick Action 1</span>
          </button>
          <button className="p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <span className="text-indigo-600 font-medium">Quick Action 2</span>
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent Updates</h3>
            <Bell className="w-5 h-5 text-gray-600" />
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-md shadow-sm">
              <p className="text-sm">New feature available!</p>
              <span className="text-xs text-gray-500">Just now</span>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <p className="text-sm">Extension updated to v1.0.0</p>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-4 text-center text-sm text-gray-600 border-t">
        <p>Made with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;