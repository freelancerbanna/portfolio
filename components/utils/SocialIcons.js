import { HomeSocial } from "..";
import Link from "next/link";
const SocialIcons = () => {
  return (
    <>
      {HomeSocial &&
        HomeSocial.map((social) => (
          <Link key={social.id} href={social.iconLink}>
            <a target="_blank">{social.iconName}</a>
          </Link>
        ))}
    </>
  );
};

export default SocialIcons;
