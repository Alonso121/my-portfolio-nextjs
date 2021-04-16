import { useRouter } from "next/router"
import Image from 'next/image'

const Icons = () => {
    const route = useRouter()

    return (
        <div className='my-social-icons '>
            <a href="https://twitter.com/TahiriAlison" target="_blank" alt="twitter link" rel="noreferrer">
              <div className="fa-2x">
                <Image layout="fill" src="/img/twitter.png" alt="twitter icon" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/alison-tahiri-0421b2205/"
              alt="linkedin link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fa-2x">
                <Image layout="fill" src="/img/linkedin.png" alt="linkedin icon" />
              </div>
            </a>
            <a href="https://github.com/Alonso121" target="_blank" alt="github link" rel="noreferrer">
              <div className="fa-2x">
                <Image layout="fill" src="/img/github.png" alt="github icon" />
              </div>
            </a>
          </div>
    )
}

export default Icons
