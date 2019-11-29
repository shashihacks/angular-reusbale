export interface Dropdown {
    name: string
    data: Array<dropDownList>
    color?: string
    disabled?: boolean
    icon?: string
}

export interface dropDownList {
    text: string,
    icon?: string,
    event? : Function
}