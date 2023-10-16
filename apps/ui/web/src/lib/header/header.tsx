import './header.styles.scss';

export interface IHeader {
    title: string;
    subtitle: string;
}

export const Header = ({title, subtitle}: IHeader) => {
    return <header className={'sprintform-header'}>
        <div className="container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    </header>;
}
