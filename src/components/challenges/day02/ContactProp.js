const ContactProp = (props) => { //property returning the react element
    return (
        <div>
        <h3>{props.name}</h3>
            <p> I am { props.age } and I went to {props.school} until {props.graduationYear}</p>
        </div>
        )

}

export default ContactProp;