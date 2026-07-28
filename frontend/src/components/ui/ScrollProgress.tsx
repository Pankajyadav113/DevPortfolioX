import { useEffect, useState } from "react";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / height) * 100;

      setWidth(progress);
    };

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full rounded-r-full bg-cyan-400 transition-all duration-150"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default ScrollProgress;