type LogoProps = {
  className?: string;
};
export const Logo = ({ className }: LogoProps) => {
  return (
    <img
      className={`${className} h-24 w-24 rounded-xl`}
      src="./assets/parcellab_logo.jpeg"
      alt="parcellab logo"
    ></img>
  );
};
