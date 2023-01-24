
interface IFormInputProps {
    label: string,
    type: string,
    placeholder: string
}

const FormInput = (props: IFormInputProps) => {
    return (
        <div className="form-group mt-3">
			  <label>{props.label}</label>
			  <input
				type={props.type}
				className="form-control mt-1"
				placeholder={props.placeholder}
			  />
		</div>
    )
}

export default FormInput