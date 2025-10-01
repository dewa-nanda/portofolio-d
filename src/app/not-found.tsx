import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-[#ef4444] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-100 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-slate-400 mb-6">
        Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="!no-underline px-6 py-2 bg-[#ef4444] text-white rounded-lg hover:bg-[#ef4444a9] transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
