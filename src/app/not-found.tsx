const NotFound = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-100 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-slate-400 mb-6">
        Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default NotFound;
