interface IMateProps {
    style: string
    firstName: string,
    lastName: string,
    login: string,
    imgLink: string,
    role: string,
    description: string,
    github: string,
    email: string,
}

const Mate = (props: IMateProps) => {
   return (
        <>
            <article className={props.style}>
                <img src={props.imgLink} alt={props.login} style={{width: '100%'}} />
                <h2>{props.firstName} {props.lastName}</h2>
                <p className='title'>{props.role}</p>
                <p>{props.description}</p>
                <p>{props.email}</p>
                <p className="button">
                    <a className="btn git" href={props.github} role="button">
                        <i className="fab fa-github"></i>
                    </a>                        
                </p>
             </article>
        </>
    )
}
export default Mate