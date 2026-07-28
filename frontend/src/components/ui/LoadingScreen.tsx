function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400"></div>

        <h1 className="mt-6 text-3xl font-bold text-cyan-400">
          DevPortfolioX
        </h1>

        <p className="mt-2 text-slate-400">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;