import Typewriter from "typewriter-effect"

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Android App Developer",
          "Tech Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}