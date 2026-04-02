/** @format */
import { useEffect, useRef } from "react";

const useChatScroll = (dependency) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [dependency]); // Triggers every time the 'messages' array changes

  return scrollRef;
};

export default useChatScroll;