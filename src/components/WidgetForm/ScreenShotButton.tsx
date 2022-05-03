import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";
export function ScreenShotButton() {
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);

  async function handleTakeScreenShot() {
    setIsTakingScreenShot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    setIsTakingScreenShot(false);
  }

  return (
    <button
      onClick={handleTakeScreenShot}
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
