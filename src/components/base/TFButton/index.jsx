//TRUE FALSE BUTTTON COMPONENT

export const TFButton = ({
    text="True",
    classname="",
    ...props
}) => {
    return(
        <div className={`h-[6.375rem] w-[11.625rem] rounded-[1.875rem] shadow-[0px_9px_10px_rgba(0,0,0,0.5)] z-50 ${classname}`} {...props}>
            {text}
        </div>
    )
}