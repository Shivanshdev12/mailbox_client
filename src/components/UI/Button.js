const Button = (props) => {
    const classes = "btn " + props.className;
    return (<button className={classes} onClick={props.onClick}>
        {props.children}
    </button>)
}

export default Button;