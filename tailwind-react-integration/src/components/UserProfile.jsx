import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
