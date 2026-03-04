import css from "../styles/Profile.module.css"

export default function Profile() {
    return (
        <>
        <h1 className={css.profileName}>Katherine Johnson profile</h1>
      <img
      className={css.profileAvatar}
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      </>
    )
  }