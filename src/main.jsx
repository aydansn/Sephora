import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AllProvider } from "./contexts/AllContext.jsx";
import { CategoryProvider } from "./contexts/Category.jsx";
import { OffProvider } from "./contexts/OffContext.jsx";
import { AllProductsProvider } from "./contexts/AllProductsContext.jsx";
import { BeautyProvider } from "./contexts/BeautyContext.jsx";
import { DysonProvider } from "./contexts/DysonContext.jsx";
import { GiftsProvider } from "./contexts/GiftsContext.jsx";
import { FooterProvider } from "./contexts/FooterContext.jsx";
import { LastFootProvider } from "./contexts/LastFootContext.jsx";

createRoot(document.getElementById("root")).render(
  <AllProvider>
    <CategoryProvider>
      <OffProvider>
        <AllProductsProvider>
          <BeautyProvider>
            <DysonProvider>
              <GiftsProvider>
                <FooterProvider>
                  <LastFootProvider>
                    <App />
                  </LastFootProvider>
                </FooterProvider>
              </GiftsProvider>
            </DysonProvider>
          </BeautyProvider>
        </AllProductsProvider>
      </OffProvider>
    </CategoryProvider>
  </AllProvider>
);
