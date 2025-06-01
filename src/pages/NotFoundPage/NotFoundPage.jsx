import css from "./NotFoundPage.module.css";
import { PiFilmSlateDuotone } from "react-icons/pi";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <PiFilmSlateDuotone className={css.icon} />
      <h3 className={css.text}>
        A little support at the movie theater. Our server went to get popcorn.
        He'll be back soon!
      </h3>
    </div>
  );
}
