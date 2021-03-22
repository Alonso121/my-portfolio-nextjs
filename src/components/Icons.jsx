import { useRouter } from "next/router"

const Icons = () => {
    const route = useRouter()

    return (
        <div className={`social-icons ${route.pathname === '/about' || '/projects'? 'vertical': ''}`}>
            <a href="https://twitter.com/TahiriAlison" target="_blank">
              <img src="img/twitter.png" className="fa-2x" alt="twitter icon"></img>
            </a>

            <a
              href="https://www.linkedin.com/in/alison-tahiri-0421b2205/"
              target="_blank"
            >
              <img src="img/linkedin.png" className="fa-2x"></img>
            </a>
            <a href="https://github.com/Alonso121" target="_blank">
              <img src="img/github.png" className="fa-2x"></img>
            </a>
          </div>
    )
}

export default Icons
