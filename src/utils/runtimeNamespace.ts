import { ProjectName } from "../../project/config.ts";

export const IS_DOCKBRIDGE_BUILD = ProjectName === "dockbridge";

export const APP_GLOBAL_SCOPE = IS_DOCKBRIDGE_BUILD ? "_dockbridge" : "_spicy_lyrics";
export const APP_EXECUTE_SCOPE = APP_GLOBAL_SCOPE;
export const APP_METADATA_SCOPE = IS_DOCKBRIDGE_BUILD
  ? "_dockbridge_metadata"
  : "_spicy_lyrics_metadata";

export const APP_STORAGE_PREFIX = IS_DOCKBRIDGE_BUILD ? "DockBridge-" : "SpicyLyrics-";
export const APP_CACHE_PREFIX = IS_DOCKBRIDGE_BUILD ? "DockBridge" : "SpicyLyrics";

export const APP_PAGE_ID = IS_DOCKBRIDGE_BUILD ? "DockBridgePage" : "SpicyLyricsPage";
export const APP_PAGE_SELECTOR = `#${APP_PAGE_ID}`;

export const APP_STYLE_ID = IS_DOCKBRIDGE_BUILD
  ? "dockbridge-additionalStyling"
  : "spicyLyrics-additionalStyling";

export const APP_MODAL_TAG = IS_DOCKBRIDGE_BUILD
  ? "dockbridge-generic-modal"
  : "sl-generic-modal";

export const APP_FULLSCREEN_BUTTON_ID = IS_DOCKBRIDGE_BUILD
  ? "DockBridge_FullscreenButton"
  : "DockBridge_FullscreenButton";
export const APP_POPUP_BUTTON_ID = IS_DOCKBRIDGE_BUILD
  ? "DockBridge_PopupLyricsButton"
  : "DockBridge_PopupLyricsButton";

export const APP_SIDEBAR_BODY_CLASS = IS_DOCKBRIDGE_BUILD
  ? "DockBridgeSidebarLyrics__Active"
  : "SpicySidebarLyrics__Active";

export const APP_ROUTE_BASE = IS_DOCKBRIDGE_BUILD ? "/DockBridge" : "/SpicyLyrics";
export const APP_UPDATE_ROUTE = `${APP_ROUTE_BASE}/Update`;
