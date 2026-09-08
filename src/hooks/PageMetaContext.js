import { createContext } from "react";

// Solo la compilación proporciona un recolector; el navegador actualiza el head con el hook.
export const PageMetaContext = createContext(null);
