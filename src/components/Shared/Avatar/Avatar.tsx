type AvatarProps = {
  type: "small" | "large";
  email: string;
  profile?: string;
};

const Avatar = ({ type, email, profile }: AvatarProps) => {
  const size = type === "small" ? "30px" : "60px";
  const style = { height: size, width: size };

  return (
    <figure className="rounded-circle ml-0 mr-5 my-0 overflow-hidden">
      {profile ? (
        <img src={profile} style={style} />
      ) : (
        <div style={style} className="-dark-1 bg-accent-1 text-white d-flex align-items-center justify-content-center">
          {email[0].toUpperCase()}
        </div>
      )}
    </figure>
  );
};

export default Avatar;
