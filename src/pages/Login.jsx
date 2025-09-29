export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Alumni Portal Login</h1>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}
