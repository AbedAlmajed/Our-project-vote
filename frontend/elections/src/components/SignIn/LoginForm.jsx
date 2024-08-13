

import React from 'react';

function LoginForm({ nationalID, setNationalID, name, setName, handleLogin }) {
  return (
    <div className="text-right">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">تسجيل الدخول</h2>
      <input
        type="text"
        placeholder="الرقم الوطني"
        value={nationalID}
        onChange={(e) => setNationalID(e.target.value)}
        className="w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="text"
        placeholder="الاسم"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        onClick={handleLogin}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        تسجيل الدخول
      </button>
    </div>
  );
}

export default LoginForm;

