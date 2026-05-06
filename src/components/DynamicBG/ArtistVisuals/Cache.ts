import { GetExpireStore } from "@spikerko/tools/Cache";
import { APP_CACHE_PREFIX } from "../../../utils/runtimeNamespace.ts";

const CacheStore = GetExpireStore(`${APP_CACHE_PREFIX}_ArtistVisuals`, 3, {
  Unit: "Days",
  Duration: 3,
});
export default CacheStore;
