import { useSound } from "use-sound";

const useAudio = () => {
  const [play1] = useSound("/sounds/client_public_audio_notification.mp3");
  const [play2] = useSound("/sounds/client_public_audio_notification2.mp3");
  const [play3] = useSound("/sounds/client_public_audio_sending.mp3");
  const [play4] = useSound("/sounds/client_public_audio_sending2.mp3");
  const playSound = (sound: string) => {
    switch (sound) {
      case "notification.mp3":
        play1();
        break;
      case "notification2.mp3":
        play2();
        break;
      case "sending.mp3":
        play3();
        break;
      case "sending2.mp3":
        play4();
        break;
      default:
        break;
    }
  };
  return { playSound };
};

export default useAudio;
