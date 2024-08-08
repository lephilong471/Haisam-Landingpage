import useWindowWidth from "@/app/config/hooks/useWindowWidth";

const WindowWidthWrapper = ({ children }: { children: (width: number) => React.ReactNode }) => {
   const width = useWindowWidth();
   return <>{children(width)}</>;
};

export default WindowWidthWrapper;
