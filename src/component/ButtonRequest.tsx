interface IRequestProps {
    type: string,
    className: string,
    placeholder: string
}

const ButtonRequest = (props: IRequestProps) => {
    return (
            <button type={props.type} className={props.className}>
				{props.placeholder}
			</button>
    )
}

export default ButtonRequest