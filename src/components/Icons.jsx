import { useRouter } from "next/router"

const Icons = () => {
    const route = useRouter()

    return (
        <div className='social-icons '>
            <a href="https://twitter.com/TahiriAlison" target="_blank" alt="twitter link" rel="noreferrer">
              <img src="img/twitter.png" className="fa-2x" alt="twitter icon"></img>
            </a>

            <a
              href="https://www.linkedin.com/in/alison-tahiri-0421b2205/"
              alt="linkedin link"
              target="_blank"
              rel="noreferrer"
            >
              <img src="img/linkedin.png" alt="linkedin icon" className="fa-2x"></img>
            </a>
            <a href="https://github.com/Alonso121" target="_blank" alt="github link" rel="noreferrer">
              <img src="img/github.png" alt="github icon" className="fa-2x"></img>
            </a>
          </div>
    )
}

export default Icons
