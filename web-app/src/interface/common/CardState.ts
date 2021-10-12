export interface CardState {
    col: string,
    title_pos: string,
    title: string,
    subtitle: string,
    link: string,
    header?: CardItem
    footer?: CardItem,
    content?: CardItem 
}

export interface CardItem {
    path?: string,
    text?: string,
    option?: string
}