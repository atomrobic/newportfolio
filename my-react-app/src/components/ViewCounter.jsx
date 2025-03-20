import { useEffect, useState } from "react";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const storedViews = localStorage.getItem("viewCount");
    const newCount = storedViews ? parseInt(storedViews) + 1 : 1;
    setViews(newCount);
    localStorage.setItem("viewCount", newCount);
  }, []);

  return (
    <div className="text-white text-mb">
      <p> Views: {views}</p>
    </div>
  );
};

export default ViewCounter;
