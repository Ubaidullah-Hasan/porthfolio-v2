import { PortfolioContext } from "@/context/PortfolioProvider";
import { useContext } from "react";

/**
 * @returns {import("../context/PortfolioProvider").PortfolioContextValue}
 */

const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

export default usePortfolio;